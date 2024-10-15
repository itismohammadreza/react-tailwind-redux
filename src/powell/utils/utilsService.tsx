import {AddonConfig, SafeAny, TransformOptions} from "@powell/models";
import {Button} from "@powell/components/Button";
import {$FormikContextType, $FormikErrors, $FormikTouched, $FormikValues} from "@powell/api";

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

export const isRequiredField = (formContext: $FormikContextType<$FormikValues> | null, name: string | undefined) => {
  const keys = name?.split('.') ?? [];
  let current = formContext?.validationSchema?.fields;
  for (const key of keys) {
    if (!current) {
      return false;
    }
    if (current[key]?.fields) {
      current = current[key]?.fields;
    } else {
      current = current[key];
    }
  }
  return current?.tests?.some((t: SafeAny) => t.OPTIONS.name === 'required');
}

// todo: make transform type [usage] generic in components (remove SafeAny from models)
export const transformer = <V = SafeAny, T = SafeAny>(options: TransformOptions<V, T>) => {
  const value: V = options.transform?.input?.(options.value) || options.value;
  const onChange = (...event: T[]) => {
    if (typeof options.transform?.output === 'function') {
      options.onChange(options.transform.output(...event));
    } else {
      options.onChange(...event);
    }
  }

  return {
    value,
    onChange
  }
}
