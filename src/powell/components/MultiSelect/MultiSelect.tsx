import {MultiSelectProps} from "@powell/models";
import {$MultiSelect} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";

export const MultiSelect = (props: MultiSelectProps) => {
  const {controlProps, layoutProps, rest} = useApplyConfig(props, {
    isFixLabel: false,
    sizable: true,
    groups: {
      controlProps: [
        {key: 'name', keepInRest: true},
        {key: 'inputId', alias: 'id'},
        'parseError',
      ],
      layoutProps: [
        'containerStyle',
        'label',
        'iconPosition',
        'labelPosition',
        'addon',
        'hint',
        'icon',
        'rtl',
        'showRequiredStar',
        {key: 'variant', keepInRest: true},
        'inputSize',
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
                  className={`${props.showClear ? 'is-clearable' : ''}`}
                  componentName="multi-select"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <$MultiSelect
                    {...rest}
                    panelClassName={`${props.panelClassName ?? ''} ${props.rtl ? 'panel-rtl' : ''}`}
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
                    invalid={!!control.meta?.error && !props.disabled}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
