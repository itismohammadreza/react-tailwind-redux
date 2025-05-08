import {useRef} from "react";
import {RadioGroupProps} from "@powell/models";
import {$RadioButton, $UniqueComponentId} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import './RadioGroup.scss';

export const RadioGroup = (props: RadioGroupProps) => {
  const {controlProps, layoutProps, innerProps, rest} = splitProps<RadioGroupProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      'parseError',
    ],
    layoutProps: [
      'label',
      'labelPosition',
      'hint',
      'rtl',
      'showRequiredStar',
      'variant',
    ],
    innerProps: ['optionLabel', 'optionValue']
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
                  componentName="radio-group"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                {
                  processedOptions.current.map(option => (
                      <div key={option.__id}>
                        <$RadioButton
                            {...rest}
                            inputId={option.__id}
                            checked={(control.field ? control.field.value : props.value) === option[innerProps.optionValue!]}
                            value={option[innerProps.optionValue!]}
                            onChange={(event) => {
                              control.handleChange?.(event.value);
                              rest.onChange?.(event);
                            }}
                            invalid={!!control.meta?.error}
                        />
                        <label htmlFor={option.__id}>{option[innerProps.optionLabel!]}</label>
                      </div>
                  ))
                }
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
