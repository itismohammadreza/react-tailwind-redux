import {$FormikContextType, $FormikValues} from "@powell/api";
import {Button} from "@powell/components/Button";
import {AddonConfig, SafeAny} from "@powell/models";

export const getAddonTemplate = (config?: AddonConfig) => {
  if (!config) {
    return <></>
  }
  const {type, ...rest} = config;
  switch (type) {
    case "button":
      return <Button {...rest} />
    case "icon":
      return (
          <span className="p-inputgroup-addon" onClick={rest?.onClick}>
            <i className={rest.icon}></i>
          </span>
      )
    case "text":
      return <span className="p-inputgroup-addon">{rest.text}</span>
  }
}

export const isRequiredField = (formContext: $FormikContextType<$FormikValues>, name: string) => {
  if (!formContext || !name) {
    return false;
  }
  const keys = name.split('.') ?? [];
  let current = formContext.validationSchema?.fields;
  if (!current) {
    return false;
  }
  for (const key of keys) {
    if (current[key]?.fields) {
      current = current[key]?.fields;
    } else {
      current = current[key];
    }
  }
  return current?.tests?.some((t: SafeAny) => t.OPTIONS.name === 'required');
}
