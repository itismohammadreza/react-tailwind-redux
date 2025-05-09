import {$ErrorMessage, $Field, $FieldProps, $UniqueComponentId} from "@powell/api";
import {useFormContext} from "@powell/hooks";
import {FieldControlMeta, SafeAny} from "@powell/models";
import {isRequiredField} from "@powell/utils";
import {FieldControlProps} from "@powell/models/props";
import {useRef} from "react";

export const FieldControl = (props: FieldControlProps) => {
  const {name, parseError, id, children} = props;
  const formContext = useFormContext();
  const withinForm = !!formContext && !!name;
  const isRequired = withinForm && isRequiredField(formContext, name);
  const uniqueId = useRef(id ?? $UniqueComponentId());

  // if the component is in formik context
  if (withinForm) {
    return (
        <$Field name={name}>
          {(control: $FieldProps) => {
            const handleChange = (event: SafeAny) => {
              formContext!.setFieldValue(name, event)
            };
            const handleBlur = (event: SafeAny) => {
              control.field.onBlur(event)
            };
            const controlMeta: FieldControlMeta = {
              ...control,
              handleChange,
              handleBlur,
              isRequired,
              id: uniqueId.current,
              errorElement: control.meta.error ? (
                  <$ErrorMessage name={name}>
                    {(message) => parseError?.(message) ?? message}
                  </$ErrorMessage>
              ) : null
            }
            return typeof children === "function" ? children(controlMeta) : children;
          }}
        </$Field>
    )
  }
  // if the component is NOT in formik context
  return typeof children === "function" ? children({id: uniqueId.current}) : children;
}
