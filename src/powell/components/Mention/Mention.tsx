import {ReactNode} from "react";
import {Addon, LabelPosition, Size} from "@powell/models";
import {$IconFieldProps, $Mention, $MentionProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './Mention.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface MentionProps extends $MentionProps {
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

export const Mention = (props: MentionProps) => {
  const {controlProps, layoutProps, rest} = splitProps<MentionProps>(props, {
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
                  componentName="mention"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Mention
                    {...rest}
                    value={control.value}
                    onChange={(event) => {
                      control.handleChange?.((event.target as HTMLInputElement).value);
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
