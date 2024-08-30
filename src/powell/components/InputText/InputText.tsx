import {ChangeEvent, ReactNode, useCallback, useRef, useState} from "react";
import {Addon, LabelPosition} from "@powell/models";
import {
  primeClassNames,
  PrimeFloatLabel,
  PrimeIconField,
  PrimeIconFieldProps,
  PrimeInputIcon,
  PrimeInputText,
  PrimeInputTextProps,
  PrimeUniqueComponentId
} from "@powell/api";
import {getAddonTemplate, transformer} from "@powell/utils";
import {Field, FieldProps} from "formik";
import {useConfigHandler, useFormContext} from "@powell/hooks";
import {SafeAny} from "@powell/models/common";
import './InputText.scss';

interface InputTextProps extends PrimeInputTextProps {
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
  addon?: Addon;
  iconPosition?: PrimeIconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export const InputText = (props: InputTextProps) => {
  props = useConfigHandler(props);
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
    ...rest
  } = props;

  const inputId = useRef(PrimeUniqueComponentId());

  // Check if we're in Formik context
  const formContext = useFormContext();
  const withinForm = formContext && name;
  const isRequired = withinForm && formContext.validationSchema.fields?.[name].tests?.some((t: SafeAny) => t.OPTIONS.name === 'required');

  // Internal state for non-Formik usage
  const [internalValue, setInternalValue] = useState(rest.value || '');

  const inputEl = useCallback(() => {
    const commonProps = {
      ...rest,
      variant,
      id: inputId.current,
      name,
      required: isRequired,
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
                    <PrimeInputText
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
                    {
                      meta.error
                          ?
                          parseError?.(meta.error) || <small className="text-red-700">{meta.error}</small>
                          :
                          <div>{rest.hint}</div>
                    }
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
          <PrimeInputText
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
  }, [internalValue]);

  const labelEl = rest.label && (
      <label htmlFor={inputId.current}>
        {rest.label}
        {isRequired && showRequiredStar ? '*' : ''}
      </label>
  );

  const iconEl = icon && (
      typeof icon === 'string'
          ? <PrimeInputIcon className={icon}></PrimeInputIcon>
          : <PrimeInputIcon>{icon}</PrimeInputIcon>
  );

  const withIcon = (
      <PrimeIconField iconPosition={iconPosition}>
        {iconEl}
        {inputEl()}
      </PrimeIconField>
  );

  return (
      <div className={primeClassNames('input-text-wrapper',
          `variant-${variant}`,
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
          <div className={primeClassNames({"p-inputgroup": addon})}>
            {getAddonTemplate(addon?.before)}
            {
              labelPosition === 'float' ? (
                  <PrimeFloatLabel>
                    {icon ? withIcon : inputEl()}
                    {labelEl}
                  </PrimeFloatLabel>
              ) : (
                  icon ? withIcon : inputEl()
              )
            }
            {getAddonTemplate(addon?.after)}
          </div>
        </div>
      </div>
  );
};
