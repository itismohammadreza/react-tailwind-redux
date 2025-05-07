import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$ColorPicker, $ColorPickerProps, $IconFieldProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './ColorPicker.scss';
import {FieldControl} from "@powell/components/FieldControl/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout/FieldLayout";

interface ColorPickerProps extends $ColorPickerProps {
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

export const ColorPicker = (props: ColorPickerProps) => {
  const {controlProps, layoutProps, rest} = splitProps<ColorPickerProps>(props, {
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
      'inputSize',
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="color-picker"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$ColorPicker
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
