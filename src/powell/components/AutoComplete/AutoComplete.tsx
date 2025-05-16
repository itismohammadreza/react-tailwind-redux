import {$AutoComplete} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {AutoCompleteProps} from "@powell/models/props";
import {useApplyConfig} from "@powell/hooks";
import './AutoComplete.scss';

export const AutoComplete = (props: AutoCompleteProps) => {
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
      ],
    }
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="auto-complete"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}
                  className={props.dropdown ? 'has-dropdown' : ''}>
                <$AutoComplete
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
