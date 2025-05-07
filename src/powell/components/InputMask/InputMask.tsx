import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$IconFieldProps, $InputMask, $InputMaskProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './InputMask.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface InputMaskProps extends $InputMaskProps {
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

export const InputMask = (props: InputMaskProps) => {
  const {controlProps, layoutProps, rest} = splitProps<InputMaskProps>(props, {
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
                  componentName="input-mask"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$InputMask
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
