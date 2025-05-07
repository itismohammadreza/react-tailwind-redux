import {ReactNode} from "react";
import {FixLabelPosition, Size} from "@powell/models";
import {$InputOtp, $InputOtpProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './InputOtp.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface InputOtpProps extends $InputOtpProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  inputSize?: Size;
  labelPosition?: FixLabelPosition;
}

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
      'labelPosition',
      'hint',
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
                  componentName="input-otp"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$InputOtp
                    {...rest}
                    value={control.value}
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
