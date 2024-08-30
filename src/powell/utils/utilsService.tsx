import {AddonConfig} from "@powell/models";
import {Button} from "@powell/components/Button";
import {SafeAny} from "@powell/models/common";
import {UseTransformOptions} from "@powell/hooks";

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

export const transformer = (options: UseTransformOptions) => {
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
