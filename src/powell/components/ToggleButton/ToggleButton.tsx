import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$ToggleButton, $ToggleButtonProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './ToggleButton.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface ToggleButtonProps extends Omit<$ToggleButtonProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const {controlProps, layoutProps, rest} = splitProps<ToggleButtonProps>(props, {
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
                  componentName="toggle-button"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$ToggleButton
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
