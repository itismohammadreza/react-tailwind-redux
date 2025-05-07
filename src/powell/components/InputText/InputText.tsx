import {$InputText} from "@powell/api";
import './InputText.scss';
import {FieldControl} from "@powell/components/FieldControl/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout/FieldLayout";
import {splitProps} from "@powell/utils";
import {InputTextProps} from "@powell/models/props";

export const InputText = (props: InputTextProps) => {
  const {controlProps, layoutProps, rest} = splitProps<InputTextProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      'parseError',
    ],
    layoutProps: [
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
                  componentName="input-text"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$InputText
                    {...rest}
                    value={control.value}
                    onChange={(event) => {
                      control.handleChange?.(event.target.value);
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
}
