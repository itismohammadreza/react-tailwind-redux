import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$IconFieldProps, $TreeSelect, $TreeSelectProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './TreeSelect.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface TreeSelectProps extends $TreeSelectProps {
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

export const TreeSelect = (props: TreeSelectProps) => {
  const {controlProps, layoutProps, rest} = splitProps<TreeSelectProps>(props, {
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
                  componentName="tree-select"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$TreeSelect
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
