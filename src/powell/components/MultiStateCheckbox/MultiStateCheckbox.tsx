import {MultiStateCheckboxProps} from "@powell/models";
import {$MultiStateCheckbox} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";
import './MultiStateCheckbox.scss';

export const MultiStateCheckbox = (props: MultiStateCheckboxProps) => {
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
                  componentName="multi-state-checkbox"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <$MultiStateCheckbox
                    {...rest}
                    id={control.id}
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
