import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$InputSwitch, $InputSwitchProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './InputSwitch.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface InputSwitchProps extends Omit<$InputSwitchProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const InputSwitch = (props: InputSwitchProps) => {
  const {controlProps, layoutProps, rest} = splitProps<InputSwitchProps>(props, {
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
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="input-switch"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$InputSwitch
                    {...rest}
                    checked={control.value}
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
