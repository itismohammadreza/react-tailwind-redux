import {InputNumberProps} from "@powell/models";
import {$InputNumber} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import './InputNumber.scss';

export const InputNumber = (props: InputNumberProps) => {
  const {controlProps, layoutProps, rest} = splitProps<InputNumberProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      {
        key: 'inputId',
        alias: 'id'
      },
      'parseError',
    ],
    layoutProps: [
      'label',
      'iconPosition',
      'labelPosition',
      'addon',
      'hint',
      'icon',
      'rtl',
      'showRequiredStar',
      'variant',
      'inputSize',
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="input-number"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$InputNumber
                    {...rest}
                    inputId={control.id}
                    value={control.field ? control.field.value : props.value}
                    onChange={(event) => {
                      control.handleChange?.(event.value);
                      props.onChange?.(event);
                    }}
                    onBlur={(event) => {
                      control.handleBlur?.(event);
                      props.onBlur?.(event);
                    }}
                    invalid={!!control.meta?.error}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
