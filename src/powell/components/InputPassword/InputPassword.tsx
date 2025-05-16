import {FieldControlMeta, InputPasswordProps, SafeAny} from "@powell/models";
import {$Password} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";
import './InputPassword.scss';
import {TimesIcon} from "primereact/icons/times";

export const InputPassword = (props: InputPasswordProps) => {
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

  const clear = (control: FieldControlMeta) => {
    control.handleChange?.('');
    props.onChange?.({target: {value: ''}} as SafeAny);
  };

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  className={`
                    ${props.showClear ? 'is-clearable' : ''} 
                    ${props.toggleMask ? 'has-toggler' : ''}`
                  }
                  componentName="input-password"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <div className="input-password-inner">
                  <$Password
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
                  {
                      ((control.field?.value || props.value) != null && props.showClear && !props.disabled) &&
                      <TimesIcon className="input-password-clear-icon" onPointerUp={() => clear(control)}/>
                  }
                </div>
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
