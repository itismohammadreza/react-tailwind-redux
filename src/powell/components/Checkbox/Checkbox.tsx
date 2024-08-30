import {Control, FieldError, FieldValues, PathValue, useController, UseControllerProps} from "react-hook-form";
import {ChangeEvent, ReactNode, useRef} from "react";
import {useTransform} from "@powell/hooks";
import {
  PrimeCheckbox,
  PrimeCheckboxChangeEvent,
  PrimeCheckboxProps,
  primeClassNames,
  PrimeUniqueComponentId
} from "@powell/api";
import './Checkbox.scss';
import {useConfigHandler} from "@powell/hooks/useConfigHandler";

interface CheckboxProps extends PrimeCheckboxProps {
  // form-based props
  label?: string;
  hint?: string;
  name: string;
  rules?: UseControllerProps<FieldValues, string>['rules'];
  parseError?: (error: FieldError) => ReactNode;
  control?: Control<FieldValues>;
  transform?: {
    input?: (value: PathValue<FieldValues, string>) => any;
    output?: (event: ChangeEvent<HTMLInputElement>) => PathValue<FieldValues, string>;
  };
  // config-based props
  showRequiredStar?: boolean;
  rtl?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
  props = useConfigHandler(props);
  const {
    rules = {},
    parseError,
    name,
    control,
    transform = {},
    rtl,
    showRequiredStar,
    variant,
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
