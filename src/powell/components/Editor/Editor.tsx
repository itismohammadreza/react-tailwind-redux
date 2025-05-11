import {EditorProps} from "@powell/models";
import {$Editor} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import './Editor.scss';

export const Editor = (props: EditorProps) => {
  const {controlProps, layoutProps, rest} = splitProps<EditorProps>(props, {
    controlProps: [
      {key: 'name', keepInRest: true},
      'id',
      'parseError',
    ],
    layoutProps: [
      'label',
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
                  componentName="editor"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <$Editor
                    {...rest}
                    id={control.id}
                    value={control.field ? control.field.value : props.value}
                    onTextChange={(event) => {
                      control.handleChange?.(event.htmlValue);
                      props.onTextChange?.(event);
                    }}
                    onBlur={(event) => {
                      control.handleBlur?.({target: {name: rest.name}});
                      props.onBlur?.(event);
                    }}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
