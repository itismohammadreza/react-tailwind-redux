import {ChangeEvent, ReactNode, useCallback, useRef, useState} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {
  $classNames,
  $FloatLabel,
  $IconField,
  $IconFieldProps,
  $InputIcon,
  $Mention,
  $MentionProps,
  $UniqueComponentId
} from "@powell/api";
import {getAddonTemplate, transformer} from "@powell/utils";
import {Field, FieldProps} from "formik";
import {useApplyConfig, useFormContext} from "@powell/hooks";
import {SafeAny} from "@powell/models/common";
import {ErrorMessage} from "@powell/components/ErrorMessage";
import './Mention.scss';

interface MentionProps extends $MentionProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  transform?: {
    input?: (value: SafeAny) => string;
    output?: (event: ChangeEvent<HTMLInputElement>) => SafeAny;
  };
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  inputSize?: Size;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export const Mention = (props: MentionProps) => {
  props = useApplyConfig(props);
  const {
    parseError,
    name,
    transform = {},
    iconPosition = 'left',
    labelPosition,
    addon,
    icon,
    rtl,
    showRequiredStar,
    variant,
    inputSize,
    ...rest
  } = props;

  const inputId = useRef($UniqueComponentId());

  // Check if we're in Formik context
  const formContext = useFormContext();
  const withinForm = !!formContext && !!name;
  const isRequired = withinForm && formContext.validationSchema?.fields?.[name].tests?.some((t: SafeAny) => t.OPTIONS.name === 'required');

  // Internal state for non-Formik usage
  const [internalValue, setInternalValue] = useState(rest.value || '');

  const rootEl = useCallback(() => {
    const commonProps = {
      ...rest,
      variant,
      id: inputId.current,
      name,
    };

    if (withinForm) {
      // if in Formik context
      return (
          <Field name={name}>
            {({field, meta}: FieldProps) => {
              const {value, onChange} = transformer({
                value: field.value,
                onChange: (event: string) => formContext.setFieldValue(name, event),
                transform: {
                  input: transform.input ?? (value => value),
                  output: transform.output ?? (event => event.target.value)
                }
              });

              return (
                  <>
                    <$Mention
                        {...commonProps}
                        value={value}
                        onChange={(event) => {
                          onChange(event);
                          rest.onChange?.(event);
                        }}
                        onBlur={(event) => {
                          field.onBlur(event);
                          rest.onBlur?.(event);
                        }}
                        invalid={!!meta.error}
                    />
                    <ErrorMessage message={meta.error} parseError={parseError} hint={rest.hint}/>
                  </>
              );
            }}
          </Field>
      );
    } else {
      // if outside Formik context
      const {value, onChange} = transformer({
        value: internalValue,
        onChange: (event: string) => setInternalValue(event),
        transform: {
          input: transform.input ?? (value => value),
          output: transform.output ?? (event => event.target.value)
        }
      });

      return (
          <$Mention
              {...commonProps}
              value={value}
              onChange={(event) => {
                onChange(event);
                rest.onChange?.(event);
              }}
              onBlur={rest.onBlur}
          />
      );
    }
  }, [internalValue, props]);

  const labelEl = rest.label && (
      <label htmlFor={inputId.current}>
        {rest.label}
        {isRequired && showRequiredStar ? '*' : ''}
      </label>
  );

  const iconEl = icon && (
      typeof icon === 'string'
          ? <$InputIcon className={icon}></$InputIcon>
          : <$InputIcon>{icon}</$InputIcon>
  );

  const withIcon = (
      <$IconField iconPosition={iconPosition}>
        {iconEl}
        {rootEl()}
      </$IconField>
  );

  return (
      <div className={$classNames('input-text-wrapper',
          `variant-${variant}`,
          `p-inputtext-${inputSize}`,
          {
            [`label-${labelPosition}`]: rest.label,
            [`icon-${iconPosition}`]: iconEl,
            'is-rtl': rtl,
            'is-ltr': !rtl,
            'addon-before': addon?.before,
            'addon-after': addon?.after,
          })}>
        <div className="field">
          {labelPosition !== 'float' && labelEl}
          <div className={$classNames('field-inner', {"p-inputgroup": addon})}>
            {getAddonTemplate(addon?.before)}
            {
              labelPosition === 'float' ? (
                  <$FloatLabel>
                    {icon ? withIcon : rootEl()}
                    {labelEl}
                  </$FloatLabel>
              ) : (
                  icon ? withIcon : rootEl()
              )
            }
            {getAddonTemplate(addon?.after)}
          </div>
        </div>
      </div>
  );
};
