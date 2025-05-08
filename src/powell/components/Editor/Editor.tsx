import {EditorProps} from "@powell/models";
import {$Editor} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import './Editor.scss';

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
