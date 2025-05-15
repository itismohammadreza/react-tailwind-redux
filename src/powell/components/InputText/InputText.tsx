import {InputTextProps} from "@powell/models/props";
import {$InputText} from "@powell/api";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {useApplyConfig} from "@powell/hooks";
import './InputText.scss';
import {TimesIcon} from "primereact/icons/times";
import {FieldControlMeta, SafeAny} from "@powell/models";

export const InputText = (props: InputTextProps) => {
  const {controlProps, layoutProps, rest} = useApplyConfig(props, {
    isFixLabel: false,
    sizable: true,
    groups: {
      controlProps: [
        {key: 'name', keepInRest: true},
        'id',
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
                  className={props.showClear ? 'input-text-clearable' : ''}
                  componentName="input-text"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={!props.disabled && control.errorElement}>
                <div className="input-text-inner">
                  <$InputText
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
                      invalid={!!control.meta?.error && !props.disabled}
                  />
                  {
                      ((control.field?.value || props.value) != null && props.showClear && !props.disabled) &&
                      <TimesIcon className="input-text-clear-icon" onPointerUp={() => clear(control)}/>
                  }
                </div>
              </FieldLayout>
          )
        }
      </FieldControl>
  );
}
