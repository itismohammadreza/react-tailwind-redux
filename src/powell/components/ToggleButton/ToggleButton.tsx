import {ToggleButtonProps} from "@powell/models";
import {$ToggleButton} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import './ToggleButton.scss';

export const ToggleButton = (props: ToggleButtonProps) => {
  const {controlProps, layoutProps, rest} = splitProps<ToggleButtonProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
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
                  componentName="toggle-button"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$ToggleButton
                    {...rest}
                    id={control.id}
                    checked={control.field ? control.field.value : props.checked}
                    onChange={(event) => {
                      control.handleChange?.(event.value);
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
