import {$CascadeSelect} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {CascadeSelectProps} from "@powell/models/props";
import './CascadeSelect.scss';

export const CascadeSelect = (props: CascadeSelectProps) => {
  const {controlProps, layoutProps, rest} = splitProps<CascadeSelectProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      {
        key: 'inputId',
        alias: 'id'
      },
      'parseError',
    ],
    layoutProps: [
      'label',
      'iconPosition',
      'labelPosition',
      'addon',
      'hint',
      'icon',
      'rtl',
      'showRequiredStar',
      'variant',
      'inputSize',
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="cascade-select"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$CascadeSelect
                    {...rest}
                    inputId={control.id}
                    value={control.field ? control.field.value : props.value}
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
