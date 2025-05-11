import {$AutoComplete} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {AutoCompleteProps} from "@powell/models/props";
import './AutoComplete.scss';

export const AutoComplete = (props: AutoCompleteProps) => {
  const {controlProps, layoutProps, rest} = splitProps<AutoCompleteProps>(props, {
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
                  errorElement={!props.disabled && control.errorElement}>
                <$AutoComplete
                    {...rest}
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
