import {useRef} from "react";
import {RadioGroupProps} from "@powell/models";
import {$RadioButton, $UniqueComponentId} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";
import './RadioGroup.scss';

export const RadioGroup = (props: RadioGroupProps) => {
  const {controlProps, layoutProps, innerProps, rest} = useApplyConfig(props, {
    isFixLabel: true,
    sizable: false,
    groups: {
      controlProps: [
        {key: 'name', keepInRest: true},
        {key: 'inputId', alias: 'id'},
        'parseError',
      ],
      layoutProps: [
        'containerStyle',
        'label',
        'labelPosition',
        'hint',
        'rtl',
        'showRequiredStar',
        {key: 'variant', keepInRest: true},
        {key: 'disabled', keepInRest: true},
      ],
      innerProps: ['optionLabel', 'optionValue'],
    }
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
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                {
                  processedOptions.current.map(option => (
                      <div className="radio-group-item" key={option.__id}>
                        <$RadioButton
                            {...rest}
                            inputId={option.__id}
                            checked={(control.field ? control.field.value : props.value) === option[innerProps.optionValue!]}
                            value={option[innerProps.optionValue!]}
                            onChange={(event) => {
                              control.handleChange?.(event.value);
                              rest.onChange?.(event);
                            }}
                            invalid={!!control.meta?.error && !props.disabled}
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
