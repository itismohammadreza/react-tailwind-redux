import {$Checkbox} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {CheckboxProps} from "@powell/models";
import {useApplyConfig} from "@powell/hooks";

export const Checkbox = (props: CheckboxProps) => {
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
        'containerStyle',
        'label',
        'labelPosition',
        'hint',
        'rtl',
        'showRequiredStar',
        {key: 'variant', keepInRest: true},
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
                  icon={null}
                  componentName="checkbox"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <$Checkbox
                    {...rest}
                    inputId={control.id}
                    checked={control.field ? control.field.value : props.checked}
                    onChange={(event) => {
                      control.handleChange?.(event.checked);
                      props.onChange?.(event);
                    }}
                    invalid={!!control.meta?.error && !props.disabled}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
