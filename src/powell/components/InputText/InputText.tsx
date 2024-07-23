import { Control, FieldError, FieldValues, PathValue, useController, UseControllerProps } from "react-hook-form";
import { ChangeEvent, ReactNode, useRef } from "react";
import { usePowellConfig, useTransform } from "@powell/hooks";
import { Addon, LabelPosition } from "@powell/models";
import {
  primeClassNames,
  PrimeFloatLabel,
  PrimeIconField,
  PrimeIconFieldProps,
  PrimeInputIcon,
  PrimeInputText,
  PrimeInputTextProps,
  PrimeUniqueComponentId
} from "@powell/api";
import { getAddonTemplate } from "@powell/utils";
import './InputText.scss';

interface InputTextProps extends PrimeInputTextProps {
  name: string;
  rules?: UseControllerProps<FieldValues, string>['rules'];
  parseError?: (error: FieldError) => ReactNode;
  control?: Control<FieldValues>;
  transform?: {
    input?: (value: PathValue<FieldValues, string>) => any;
    output?: (event: ChangeEvent<HTMLInputElement>) => PathValue<FieldValues, string>;
  };
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  iconPosition?: PrimeIconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export const InputText = (props: InputTextProps) => {
  const [config] = usePowellConfig();
  const {
    rules = {},
    parseError,
    name,
    control,
    transform = {},
    iconPosition = 'left',
    labelPosition = 'fixed-top',
    addon,
    icon,
    rtl = config.rtl,
    showRequiredStar = config.showRequiredStar,
    variant = config.inputStyle,
    ...rest
  } = props;

  const inputId = useRef(PrimeUniqueComponentId());
  const {field, fieldState: {error}} = useController({
    name,
    control,
    disabled: rest.disabled,
    rules,
  })

  // let field = {};
  // let error = false;
  // if (name) {
  //   const controller = useController({
  //     name,
  //     control,
  //     disabled: rest.disabled,
  //     rules,
  //   })
  //   field = controller.field;
  //   error = controller.fieldState.error
  // }

  const {value, onChange} = useTransform<FieldValues, string, any>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input: transform.input ?? (value => value),
      output: transform.output ?? ((event: ChangeEvent<HTMLInputElement>) => event.target.value as PathValue<FieldValues, string>)
    }
  });

  const labelEl = rest.label &&
      <label htmlFor={inputId.current}>{rest.label}{rules.required && showRequiredStar ? '*' : ''}</label>;
  const rootEl = (
      <PrimeInputText
          {...rest}
          variant={variant}
          id={inputId.current}
          name={field.name}
          value={value}
          onChange={(event) => {
            onChange(event)
            rest.onChange?.(event);
          }}
          onBlur={(event) => {
            field.onBlur();
            rest.onBlur?.(event);
          }}
          required={!!rules.required}
          invalid={!!error}/>
  )

  const iconEl = icon && (
      typeof icon === 'string'
          ?
          <PrimeInputIcon className={icon}></PrimeInputIcon>
          :
          <PrimeInputIcon>{icon}</PrimeInputIcon>
  )

  const withIcon = (
      <PrimeIconField iconPosition={iconPosition}>
        {iconEl}
        {rootEl}
      </PrimeIconField>
  )

  return (
      <div className={primeClassNames('input-text-wrapper',
          `variant-${variant}`,
          {
            [`label-${labelPosition}`]: rest.label,
            [`icon-${iconPosition}`]: iconEl,
            'is-rtl': rtl,
            'is-ltr': !rtl,
            'addon-before': addon?.before,
            'addon-after': addon?.after,
          })}>
        <div className="field">
          {labelPosition !== 'float' && labelEl}
          <div className={primeClassNames({"p-inputgroup": addon})}>
            {getAddonTemplate(addon?.before)}
            {
              labelPosition === 'float'
                  ?
                  <PrimeFloatLabel>
                    {icon ? withIcon : rootEl}
                    {labelEl}
                  </PrimeFloatLabel>
                  :
                  icon ? withIcon : rootEl
            }
            {getAddonTemplate(addon?.after)}
          </div>
        </div>
        {
          error
              ?
              parseError?.(error) || <small className="text-red-700">{error.message}</small>
              :
              <div>{rest.hint}</div>
        }
      </div>
  )
}
