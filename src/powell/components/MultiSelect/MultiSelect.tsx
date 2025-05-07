import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$IconFieldProps, $MultiSelect, $MultiSelectProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './MultiSelect.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface MultiSelectProps extends $MultiSelectProps {
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

export const MultiSelect = (props: MultiSelectProps) => {
  const {controlProps, layoutProps, rest} = splitProps<MultiSelectProps>(props, {
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
                  componentName="multi-select"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$MultiSelect
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
