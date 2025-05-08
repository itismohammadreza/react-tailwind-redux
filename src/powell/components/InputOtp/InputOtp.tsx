import {InputOtpProps} from "@powell/models";
import {$InputOtp} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import './InputOtp.scss';

export const InputOtp = (props: InputOtpProps) => {
  const {controlProps, layoutProps, rest} = splitProps<InputOtpProps>(props, {
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
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="input-otp"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$InputOtp
                    {...rest}
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
