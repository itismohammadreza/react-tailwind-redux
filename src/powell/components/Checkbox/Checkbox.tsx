import {$Checkbox} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {CheckboxProps} from "@powell/models/props";
import './Checkbox.scss';

export const Checkbox = (props: CheckboxProps) => {
  const {controlProps, layoutProps, rest} = splitProps<CheckboxProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      'parseError',
    ],
    layoutProps: [
      'label',
      'labelPosition',
      'hint',
      'rtl',
      'showRequiredStar',
      'variant',
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  icon={null}
                  componentName="checkbox"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Checkbox
                    {...rest}
                    checked={control.field ? control.field.value : props.checked}
                    onChange={(event) => {
                      control.handleChange?.(event.checked);
                      props.onChange?.(event);
                    }}
                    invalid={!!control.meta?.error}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
