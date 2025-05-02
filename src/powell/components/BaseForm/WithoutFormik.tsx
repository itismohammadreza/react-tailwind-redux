import {transformer} from "@powell/utils";
import {$Checkbox} from "@powell/api";
import {useState} from "react";

export const WithoutFormik = (props: any) => {
  const {transform} = props;
  const [internalValue, setInternalValue] = useState();

  const {value, onChange} = transformer({
    value: internalValue,
    onChange: (event: boolean) => setInternalValue(event),
    transform: {
      input: transform.input ?? (value => value),
      output: transform.output ?? (event => event.checked)
    }
  });

  return (
      <$Checkbox
          {...commonProps}
          checked={value}
          onChange={(event) => {
            onChange(event);
            rest.onChange?.(event);
          }}
          onBlur={rest.onBlur}
      />
  );
};
