import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$MultiStateCheckbox, $MultiStateCheckboxProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './MultiStateCheckbox.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface MultiStateCheckboxProps extends Omit<$MultiStateCheckboxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const MultiStateCheckbox = (props: MultiStateCheckboxProps) => {
  const {controlProps, layoutProps, rest} = splitProps<MultiStateCheckboxProps>(props, {
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
                  componentName="multi-state-checkbox"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$MultiStateCheckbox
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
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
