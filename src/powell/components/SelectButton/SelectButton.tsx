import {SelectButtonProps} from "@powell/models";
import {$SelectButton} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";

export const SelectButton = (props: SelectButtonProps) => {
  const {controlProps, layoutProps, rest} = useApplyConfig(props, {
    isFixLabel: true,
    sizable: false,
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
                  componentName="select-button"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <$SelectButton
                    {...rest}
                    id={control.id}
                    value={control.field ? control.field.value : props.value}
                    onChange={(event) => {
                      control.handleChange?.(event.value);
                      props.onChange?.(event);
                    }}
                    onBlur={(event) => {
                      control.handleBlur?.({target: {name: rest.name}});
                      props.onBlur?.(event);
                    }}
                    invalid={!!control.meta?.error && !props.disabled}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
