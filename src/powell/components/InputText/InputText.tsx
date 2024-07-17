import { InputText as PrimeInputText, InputTextProps as PrimeInputTextProps } from "primereact/inputtext";
import { Control, FieldError, FieldValues, PathValue, useController, UseControllerProps } from "react-hook-form";
import { ChangeEvent, forwardRef, ReactNode, Ref } from "react";
import { useTransform } from "@powell/hooks";
import { LabelPos } from "@powell/models/common";
import { FloatLabel } from "primereact/floatlabel";
import { classNames } from "primereact/utils";
import './InputText.scss';

interface InputTextProps extends PrimeInputTextProps {
  rules?: UseControllerProps<FieldValues, string>['rules'];
  name: string;
  hint: string;
  label: string;
  labelPos: LabelPos;
  parseError?: (error: FieldError) => ReactNode;
  control?: Control<FieldValues>;
  transform?: {
    input?: (value: PathValue<FieldValues, string>) => any;
    output?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => PathValue<FieldValues, string>;
  }
}

export const InputText = forwardRef((props: InputTextProps, ref: Ref<HTMLDivElement>) => {
  const {
    rules = {},
    parseError,
    name,
    control,
    transform = {},
    ...rest
  } = props

  const {field, fieldState: {error}} = useController({
    name,
    control,
    disabled: rest.disabled,
    rules
  })

  const {value, onChange} = useTransform<FieldValues, string, any>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input: transform.input ?? (value => value || ''),
      output: transform.output ?? ((event: ChangeEvent<HTMLInputElement>) => event.target.value as PathValue<FieldValues, string>)
    }
  });

  const labelEl = <label htmlFor="username">{rest.label}</label>;
  const rootInputEl = <PrimeInputText
      {...rest}
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
      invalid={!!error}
  />

  return (
      <>
        <div className={classNames('input-text-wrapper', `label-${rest.labelPos}`)}>
          {
              rest.labelPos !== 'float' && labelEl
          }
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>
            {
              rest.labelPos === 'float'
                  ?
                  (
                      <FloatLabel>
                        {rootInputEl}
                        {labelEl}
                      </FloatLabel>
                  )
                  :
                  rootInputEl
            }
          </div>
        </div>
        {
          error
              ?
              <div className="text-red-700">{parseError?.(error) || error.message}</div>
              :
              <div>{rest.hint}</div>
        }
      </>
  )
})
