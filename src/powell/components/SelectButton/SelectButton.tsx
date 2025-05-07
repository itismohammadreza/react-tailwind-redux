import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$SelectButton, $SelectButtonProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './SelectButton.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface SelectButtonProps extends Omit<$SelectButtonProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const SelectButton = (props: SelectButtonProps) => {
  const {controlProps, layoutProps, rest} = splitProps<SelectButtonProps>(props, {
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
                  componentName="select-button"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$SelectButton
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
