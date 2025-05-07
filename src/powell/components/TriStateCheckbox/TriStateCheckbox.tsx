import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$TriStateCheckbox, $TriStateCheckboxProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './TriStateCheckbox.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface TriStateCheckboxProps extends Omit<$TriStateCheckboxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const TriStateCheckbox = (props: TriStateCheckboxProps) => {
  const {controlProps, layoutProps, rest} = splitProps<TriStateCheckboxProps>(props, {
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
                  componentName="tri-state-checkbox"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$TriStateCheckbox
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
