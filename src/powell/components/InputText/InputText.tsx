import {ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {
  $classNames,
  $ErrorMessage,
  $Field,
  $FieldProps,
  $FloatLabel,
  $IconField,
  $IconFieldProps,
  $InputIcon,
  $InputText,
  $InputTextProps,
  $UniqueComponentId
} from "@powell/api";
import {getAddonTemplate, isRequiredField, transformer} from "@powell/utils";
import {useApplyConfig, useFormContext} from "@powell/hooks";
import {SafeAny} from "@powell/models/common";
import './InputText.scss';

interface InputTextProps extends $InputTextProps {
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

export const InputText = (props: InputTextProps) => {
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
  const isRequired = withinForm && isRequiredField(formContext, name);

  // Internal state for non-Formik usage
  const [internalValue, setInternalValue] = useState(rest.value || '');

  useEffect(() => {
    if (!withinForm) {
      setInternalValue(rest.value || '');
    }
  }, [rest.value]);

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
          <$Field name={name}>
            {({field, meta}: $FieldProps<string>) => {
              const {value, onChange} = transformer<string, ChangeEvent<HTMLInputElement>>({
                value: field.value,
                onChange: (event) => formContext.setFieldValue(name, event),
                transform: {
                  input: transform.input ?? (value => value),
                  output: transform.output ?? (event => event.target.value)
                }
              });

              return (
                  <>
                    <$InputText
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
                    <$ErrorMessage name={name}>
                      {
                        (message) => <small className="error">{parseError?.(message) ?? message}</small>
                      }
                    </$ErrorMessage>
                    <small className="hint">{rest.hint}</small>
                  </>
              );
            }}
          </$Field>
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
          <$InputText
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
