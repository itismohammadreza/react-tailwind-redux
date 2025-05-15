import {usePowellConfig} from "@powell/hooks/usePowellConfig";
import {PowellConfig, SafeAny} from "@powell/models";

interface ApplyConfigOptions<T> {
  isFixLabel: boolean;
  sizable: boolean;
  groups: Record<string, PropDescriptor<T>[]>
}

interface CommonConfigProps {
  rtl?: PowellConfig["rtl"];
  showRequiredStar?: PowellConfig["showRequiredStar"];
  labelPosition?: PowellConfig["labelPosition"];
  inputSize?: PowellConfig["inputSize"];
  variant?: PowellConfig["inputStyle"];
}

type PropDescriptor<T> =
    | keyof T & string
    | {
  key: keyof T & string;
  alias?: string;
  defaultValue?: T[keyof T] | (() => T[keyof T]);
  keepInRest?: boolean;
};

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

      const value = key in props ? props[key] : typeof defaultValue === 'function' ? defaultValue() : defaultValue;
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

export const useApplyConfig = <T extends CommonConfigProps>(props: T, options: ApplyConfigOptions<T>) => {
  const [config] = usePowellConfig();
  const {sizable = true, isFixLabel = false, groups = {}} = options;

  const result = {
    ...props,
    rtl: props.rtl ?? config.rtl,
    showRequiredStar: props.showRequiredStar ?? config.showRequiredStar,
    labelPosition: props.labelPosition ?? (isFixLabel ? config.fixLabelPosition : config.labelPosition),
    ...('variant' in props ? {variant: props.variant ?? config.inputStyle} : {}),
  }

  if (sizable) {
    result.inputSize = props.inputSize ?? config.inputSize;
  }

  return splitProps<T>(result, groups);
}
