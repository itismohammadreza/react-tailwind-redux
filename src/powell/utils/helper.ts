import {PropDescriptor, SafeAny} from "@powell/models";

const splitProps = <T extends Record<string, SafeAny>>(props: T, groups: Record<string, PropDescriptor<T>[]>) => {
  const result: Record<string, SafeAny> = {};
  const rest: Partial<T> = {};
  const assigned: Partial<Record<keyof T, boolean>> = {};
  const restEligible: Partial<Record<keyof T, boolean>> = {};

  for (const groupName in groups) {
    for (const descriptor of groups[groupName]) {
      const key = typeof descriptor === 'string' ? descriptor : descriptor.key;
      const alias = typeof descriptor === 'string' ? undefined : descriptor.alias;
      const defaultValue = typeof descriptor === 'string' ? undefined : descriptor.defaultValue;
      const keepInRest = typeof descriptor === 'string' ? false : descriptor.keepInRest ?? false;

      if (!result[groupName]) {
        result[groupName] = {};
      }

      const value = key in props ? props[key] : typeof defaultValue === 'function' ? (defaultValue as any)() : defaultValue;
      result[groupName][alias ?? key] = value;

      assigned[key] = true;
      if (keepInRest) {
        restEligible[key] = true;
      }
    }
  }

  for (const key in props) {
    const typedKey = key as keyof T;
    if (!assigned[typedKey] || restEligible[typedKey]) {
      rest[typedKey] = props[typedKey];
    }
  }

  result.rest = rest;
  return result as Record<string, Partial<T>> & {rest: Partial<T>};
}

export const helper = {
  splitProps
}
