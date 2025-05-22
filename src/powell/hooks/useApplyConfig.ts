import {usePowellConfig} from "@powell/hooks/usePowellConfig";
import {ApplyConfigOptions, CommonConfigProps} from "@powell/models";
import {helper} from "@powell/utils";

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

  return helper.splitProps<T>(result, groups);
}
