import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$Dropdown, $DropdownProps, $IconFieldProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './Dropdown.scss';
import {FieldControl} from "@powell/components/FieldControl/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout/FieldLayout";

interface DropdownProps extends $DropdownProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  inputSize?: Size;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export const Dropdown = (props: DropdownProps) => {
  const {controlProps, layoutProps, rest} = splitProps<DropdownProps>(props, {
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
                  componentName="dropdown"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Dropdown
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
};
