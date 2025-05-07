import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$CascadeSelect, $CascadeSelectProps, $IconFieldProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './CascadeSelect.scss';
import {FieldControl} from "@powell/components/FieldControl/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout/FieldLayout";

interface CascadeSelectProps extends $CascadeSelectProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  inputSize?: Size;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export const CascadeSelect = (props: CascadeSelectProps) => {
  const {controlProps, layoutProps, rest} = splitProps<CascadeSelectProps>(props, {
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
                  componentName="cascade-select"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$CascadeSelect
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
