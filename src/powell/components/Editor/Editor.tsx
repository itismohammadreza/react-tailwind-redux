import {ReactNode} from "react";
import {Addon, LabelPosition} from "@powell/models";
import {$Editor, $EditorProps, $IconFieldProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './Editor.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface EditorProps extends $EditorProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export const Editor = (props: EditorProps) => {
  const {controlProps, layoutProps, rest} = splitProps<EditorProps>(props, {
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
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="editor"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Editor
                    {...rest}
                    value={control.value}
                    onTextChange={(event) => {
                      control.handleChange?.(event.htmlValue);
                      props.onTextChange?.(event);
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
