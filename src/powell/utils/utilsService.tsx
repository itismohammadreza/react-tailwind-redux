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

type PropDescriptor<T> =
    | keyof T
    | {
  key: keyof T;
  alias?: string;
  defaultValue?: T[keyof T] | (() => T[keyof T]);
  keepInRest?: boolean;
};

export const splitProps = <T extends Record<string, any>>(
    props: T,
    groups: Record<string, PropDescriptor<T>[]>
) => {
  const result: Record<string, Partial<T>> = {};
  const rest: Partial<T> = {};
  const assigned: Record<keyof T, boolean> = {} as any;
  const restEligible: Record<keyof T, boolean> = {} as any;

  for (const groupName in groups) {
    for (const descriptor of groups[groupName]) {
      const key = typeof descriptor === 'string' ? descriptor : descriptor.key;
      const alias = typeof descriptor === 'string' ? undefined : descriptor.alias;
      const defaultValue = typeof descriptor === 'string' ? undefined : descriptor.defaultValue;
      const keepInRest = typeof descriptor === 'string' ? false : descriptor.keepInRest ?? false;

      if (!result[groupName]) {
        result[groupName] = {};
      }

      const value = key in props ? props[key] : typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      result[groupName][alias ?? key] = value;

      assigned[key] = true;
      if (keepInRest) {
        restEligible[key] = true;
      }
    }
  }

  // مرحله دوم: ساخت rest فقط برای پراپ‌هایی که یا assign نشده‌اند یا explicitly allow شدند
  for (const key in props) {
    const typedKey = key as keyof T;
    if (!assigned[typedKey] || restEligible[typedKey]) {
      rest[typedKey] = props[typedKey];
    }
  }

  result.rest = rest;
  return result as Record<string, Partial<T>> & {rest: Partial<T>};
}
