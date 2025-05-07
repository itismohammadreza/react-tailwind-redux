import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$AutoComplete, $AutoCompleteProps, $IconFieldProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './AutoComplete.scss';
import {FieldControl} from "@powell/components/FieldControl/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout/FieldLayout";

interface AutoCompleteProps extends $AutoCompleteProps {
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

export const AutoComplete = (props: AutoCompleteProps) => {
  const {controlProps, layoutProps, rest} = splitProps<AutoCompleteProps>(props, {
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
                  componentName="auto-complete"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$AutoComplete
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
