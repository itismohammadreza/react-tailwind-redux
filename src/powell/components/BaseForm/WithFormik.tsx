import {$Checkbox, $ErrorMessage, $Field, $FieldProps} from "@powell/api";
import {transformer} from "@powell/utils";
import {useFormContext} from "@powell/hooks";
import {SafeAny} from "@powell/models";

export const WithFormik = <T extends SafeAny>(props: any) => {
  const {name, transform} = props;
  const formContext = useFormContext();

  return (
      <$Field name={name}>
        {({field, meta}: $FieldProps<T>) => {
          const {value, onChange} = transformer({
            value: field.value,
            onChange: (event) => formContext.setFieldValue(name, event),
            transform: {
              input: transform.input ?? (event => event),
              output: transform.output ?? (event => event)
            }
          });

          return (
              <>
                <$Checkbox
                    {...commonProps}
                    checked={value}
                    onChange={(event) => {
                      onChange(event);
                      rest.onChange?.(event);
                    }}
                    invalid={!!meta.error}
                />
                <$ErrorMessage name={name}>
                  {
                    (message) => <small className="error">{parseError?.(message) ?? message}</small>
                  }
                </$ErrorMessage>
                <small className="hint">{rest.hint}</small>
              </>
          );
        }}
      </$Field>
  );
};
