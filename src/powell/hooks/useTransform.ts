import {SafeAny} from "@powell/models/common";

export type UseTransformOptions = {
  value: SafeAny;
  onChange: (...event: SafeAny[]) => void;
  transform?: {
    input?: (value: SafeAny) => SafeAny;
    output?: (...event: SafeAny[]) => SafeAny;
  }
}

export const useTransform = (options: UseTransformOptions) => {
  const value = options.transform?.input?.(options.value) || options.value;
  const onChange = (...event: SafeAny[]) => {
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

