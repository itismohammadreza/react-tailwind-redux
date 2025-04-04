import {ChangeEvent, ReactNode, useCallback, useRef, useState} from "react";
import {FixLabelPosition} from "@powell/models";
import {
  $classNames,
  $ErrorMessage,
  $Field,
  $FieldProps,
  $RadioButton,
  $RadioButtonProps,
  $UniqueComponentId
} from "@powell/api";
import {isRequiredField, transformer} from "@powell/utils";
import {useApplyConfig, useFormContext} from "@powell/hooks";
import {SafeAny} from "@powell/models/common";
import './RadioGroup.scss';

interface RadioGroupProps extends Omit<$RadioButtonProps, 'checked'> {
  checked?: boolean;
  name: string;
  parseError?: (error: string) => ReactNode;
  transform?: {
    input?: (value: SafeAny) => string;
    output?: (event: ChangeEvent<HTMLInputElement>) => SafeAny;
  };
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
  options: SafeAny[];
  optionLabel?: string;
  optionValue?: string;
}

export const RadioGroup = (props: RadioGroupProps) => {
  props = useApplyConfig(props, {sizable: false, isFixLabel: true});
  const {
    parseError,
    name,
    transform = {},
    labelPosition,
    rtl,
    showRequiredStar,
    options,
    optionLabel = 'label',
    optionValue = 'value',
    ...rest
  } = props;

  // Check if we're in Formik context
  const formContext = useFormContext();
  const withinForm = !!formContext && !!name;
  const isRequired = withinForm && isRequiredField(formContext, name);

  // Internal state for non-Formik usage
  const [internalValue, setInternalValue] = useState(rest.checked);

  const processedOptions = useRef(options.map(option => ({
    ...option,
    __id: $UniqueComponentId()
  })));

  const rootEl = useCallback(() => {
    const commonProps = {
      ...rest,
      name,
    };

    if (withinForm) {
      // if in Formik context
      return (
          <$Field name={name}>
            {({field, meta}: $FieldProps) => {
              const {value, onChange} = transformer({
                value: field.value,
                onChange: (event: boolean) => formContext.setFieldValue(name, event),
                transform: {
                  input: transform.input ?? (value => value),
                  output: transform.output ?? (event => event.value)
                }
              });

              return (
                  <>
                    {
                      processedOptions.current.map(option => (
                          <>
                            <$RadioButton
                                {...commonProps}
                                inputId={option.__id}
                                checked={value === option[optionValue]}
                                value={option[optionValue]}
                                onChange={(event) => {
                                  onChange(event);
                                  rest.onChange?.(event);
                                }}
                                invalid={!!meta.error}
                            />
                            <label htmlFor={option.__id}>{option[optionLabel]}</label>
                          </>
                      ))
                    }
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
        onChange: (event: boolean) => setInternalValue(event),
        transform: {
          input: transform.input ?? (value => value),
          output: transform.output ?? (event => event.value)
        }
      });

      return (
          processedOptions.current.map(option => (
              <>
                <$RadioButton
                    {...commonProps}
                    inputId={option.__id}
                    checked={value === option[optionValue]}
                    value={option[optionValue]}
                    onChange={(event) => {
                      onChange(event);
                      rest.onChange?.(event);
                    }}
                />
                <label htmlFor={option.__id}>{option[optionLabel]}</label>
              </>
          ))
      );
    }
  }, [internalValue, props]);

  const labelEl = rest.label && (
      <label>
        {rest.label}
        {isRequired && showRequiredStar ? '*' : ''}
      </label>
  );

  return (
      <div className={$classNames('checkbox-wrapper',
          {
            [`label-${labelPosition}`]: rest.label,
            'is-rtl': rtl,
            'is-ltr': !rtl,
          })}>
        <div className="field">
          {labelEl}
          <div className={$classNames('field-inner')}>
            {rootEl()}
          </div>
        </div>
      </div>
  );
};
