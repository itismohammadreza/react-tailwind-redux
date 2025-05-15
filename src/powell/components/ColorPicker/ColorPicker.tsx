import {$ColorPicker} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {ColorPickerProps} from "@powell/models/props";
import {useApplyConfig} from "@powell/hooks";
import './ColorPicker.scss';

export const ColorPicker = (props: ColorPickerProps) => {
  const {controlProps, layoutProps, rest} = useApplyConfig(props, {
    isFixLabel: true,
    sizable: false,
    groups: {
      controlProps: [
        {key: 'name', keepInRest: true},
        {key: 'inputId', alias: 'id'},
        'parseError',
      ],
      layoutProps: [
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
                  componentName="color-picker"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <$ColorPicker
                    {...rest}
                    panelClassName={`${props.panelClassName} ${props.rtl ? 'panel-rtl' : ''}`}
                    inputId={control.id}
                    value={control.field ? control.field.value : props.value}
                    onChange={(event) => {
                      control.handleChange?.(event.target.value);
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
