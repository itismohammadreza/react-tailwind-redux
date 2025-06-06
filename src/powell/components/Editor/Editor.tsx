import {EditorProps} from "@powell/models";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";
import {lazy} from "react";

const LazyEditor = lazy(() =>
    import ('primereact/editor')
    .then(module => ({
      default: module.Editor
    }))
);

export const Editor = (props: EditorProps) => {
  const {controlProps, layoutProps, rest} = useApplyConfig(props, {
    isFixLabel: false,
    sizable: true,
    groups: {
      controlProps: [
        {key: 'name', keepInRest: true},
        'id',
        'parseError',
      ],
      layoutProps: [
        'containerStyle',
        'label',
        'labelPosition',
        'hint',
        'rtl',
        'showRequiredStar',
      ],
    }
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
                <LazyEditor
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
