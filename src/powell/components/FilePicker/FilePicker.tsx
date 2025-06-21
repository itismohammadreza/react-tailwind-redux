import {FilePickerProps} from "@powell/models";
import {$FileUpload} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";

export const FilePicker = (props: FilePickerProps) => {
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
        {key: 'disabled', keepInRest: true},
      ],
    }
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="file-picker"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <$FileUpload
                    {...rest}
                    id={control.id}
                    onSelect={(event) => {
                      control.handleChange?.(event.files);
                      props.onSelect?.(event);
                    }}
                    onClear={() => {
                      control.handleChange?.(undefined);
                      props.onClear?.();
                    }}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
}
