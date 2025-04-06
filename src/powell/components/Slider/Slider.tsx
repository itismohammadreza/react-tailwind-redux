import {ChangeEvent, ReactNode, useCallback, useRef, useState} from "react";
import {FixLabelPosition} from "@powell/models";
import {$classNames, $ErrorMessage, $Field, $FieldProps, $Slider, $SliderProps, $UniqueComponentId} from "@powell/api";
import {isRequiredField, transformer} from "@powell/utils";
import {useApplyConfig, useFormContext} from "@powell/hooks";
import {SafeAny} from "@powell/models/common";
import './Slider.scss';

interface SliderProps extends Omit<$SliderProps, 'checked'> {
  checked?: boolean;
  name?: string;
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
}

export const Slider = (props: SliderProps) => {
  props = useApplyConfig(props, {sizable: false, isFixLabel: true});
  const {
    parseError,
    name,
    transform = {},
    labelPosition,
    rtl,
    showRequiredStar,
    ...rest
  } = props;

  const inputId = useRef($UniqueComponentId());

  // Check if we're in Formik context
  const formContext = useFormContext();
  const withinForm = !!formContext && !!name;
  const isRequired = withinForm && isRequiredField(formContext, name);

  // Internal state for non-Formik usage
  const [internalValue, setInternalValue] = useState(rest.checked);

  const rootEl = useCallback(() => {
    const commonProps = {
      ...rest,
      inputId: inputId.current,
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
                    <$Slider
                        {...commonProps}
                        value={value}
                        onChange={(event) => {
                          onChange(event);
                          rest.onChange?.(event);
                        }}
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
        onChange: (event: boolean) => setInternalValue(event),
        transform: {
          input: transform.input ?? (value => value),
          output: transform.output ?? (event => event.value)
        }
      });

      return (
          <$Slider
              {...commonProps}
              checked={value}
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
