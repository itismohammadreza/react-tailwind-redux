import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$Knob, $KnobProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './Knob.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface KnobProps extends Omit<$KnobProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const Knob = (props: KnobProps) => {
  const {controlProps, layoutProps, rest} = splitProps<KnobProps>(props, {
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
                  componentName="knob"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Knob
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
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
