import {AddonConfig, SafeAny, TransformOptions} from "@powell/models";
import {Button} from "@powell/components/Button";

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
