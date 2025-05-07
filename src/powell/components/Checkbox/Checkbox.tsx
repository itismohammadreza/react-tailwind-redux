import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$Checkbox, $CheckboxProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './Checkbox.scss';
import {FieldControl} from "@powell/components/FieldControl/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout/FieldLayout";

interface CheckboxProps extends Omit<$CheckboxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const Checkbox = (props: CheckboxProps) => {
  const {controlProps, layoutProps, rest} = splitProps<CheckboxProps>(props, {
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

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  icon={null}
                  componentName="checkbox"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Checkbox
                    {...rest}
                    checked={control.value}
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
};
