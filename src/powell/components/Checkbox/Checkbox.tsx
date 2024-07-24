import { Control, FieldError, FieldValues, PathValue, useController, UseControllerProps } from "react-hook-form";
import { ChangeEvent, ReactNode, useRef } from "react";
import { usePowellConfig, useTransform } from "@powell/hooks";
import {
  PrimeCheckbox,
  PrimeCheckboxChangeEvent,
  PrimeCheckboxProps,
  primeClassNames,
  PrimeUniqueComponentId
} from "@powell/api";
import './Checkbox.scss';

interface CheckboxProps extends PrimeCheckboxProps {
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
  hint?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const [config] = usePowellConfig();
  const {
    rules = {},
    parseError,
    name,
    control,
    transform = {},
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

  const {value, onChange} = useTransform<FieldValues, string, any>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input: transform.input ?? (value => value),
      output: transform.output ?? ((event: PrimeCheckboxChangeEvent) => event.checked as PathValue<FieldValues, string>)
    }
  });

  const labelEl = rest.label &&
      <label htmlFor={inputId.current}>{rest.label}{rules.required && showRequiredStar ? '*' : ''}</label>;
  const rootEl = (
      <PrimeCheckbox
          {...rest}
          variant={variant}
          inputId={inputId.current}
          name={field.name}
          checked={value}
          onChange={(event) => {
            onChange(event);
            rest.onChange?.(event);
          }}
          required={!!rules.required}
          invalid={!!error}/>
  )

  return (
      <div className={primeClassNames('checkbox-wrapper',
          `variant-${variant}`,
          {
            'is-rtl': rtl,
            'is-ltr': !rtl,
          })}>
        <div className="field">
          {rootEl}
          {labelEl}
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
