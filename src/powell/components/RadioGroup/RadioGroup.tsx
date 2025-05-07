import {ReactNode, useRef} from "react";
import {FixLabelPosition} from "@powell/models";
import {$RadioButton, $RadioButtonProps, $UniqueComponentId} from "@powell/api";
import {splitProps} from "@powell/utils";
import {SafeAny} from "@powell/models/common";
import './RadioGroup.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface RadioGroupProps extends Omit<$RadioButtonProps, 'checked'> {
  checked?: boolean;
  name: string;
  parseError?: (error: string) => ReactNode;
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
  const {controlProps, layoutProps, rest} = splitProps<RadioGroupProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      'parseError',
    ],
    layoutProps: [
      'labelPosition',
      'hint',
      'rtl',
      'showRequiredStar',
      'variant',
    ],
  });

  const processedOptions = useRef(props.options.map(option => ({
    ...option,
    __id: $UniqueComponentId()
  })));

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="input-text"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                {
                  processedOptions.current.map(option => (
                      <>
                        <$RadioButton
                            {...rest}
                            inputId={option.__id}
                            checked={control.value === option[props.optionValue!]}
                            value={option[props.optionValue!]}
                            onChange={(event) => {
                              control.handleChange?.(event);
                              props.onChange?.(event);
                            }}
                            invalid={!!control.meta?.error}
                        />
                        <label htmlFor={option.__id}>{option[props.optionLabel!]}</label>
                      </>
                  ))
                }
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
