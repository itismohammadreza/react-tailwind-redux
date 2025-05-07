import {usePowellConfig} from "@powell/hooks/usePowellConfig";
import {PowellConfig} from "@powell/models";

interface ApplyConfigOptions {
  isFixLabel?: boolean;
  sizable?: boolean;
}

interface CommonConfigProps {
  rtl?: PowellConfig["rtl"];
  showRequiredStar?: PowellConfig["showRequiredStar"];
  labelPosition?: PowellConfig["labelPosition"];
  inputSize?: PowellConfig["inputSize"];
  variant?: PowellConfig["inputStyle"];
}

export const useApplyConfig = <T extends CommonConfigProps>(props: T, options: ApplyConfigOptions = {}) => {
  const [config] = usePowellConfig();
  const {sizable = true, isFixLabel = false} = options;

  const result = {
    ...props,
    rtl: props.rtl ?? config.rtl,
    showRequiredStar: props.showRequiredStar ?? config.showRequiredStar,
    labelPosition: props.labelPosition ?? config.labelPosition,
    ...('variant' in props ? {variant: props.variant ?? config.inputStyle} : {}),
  }

  if (isFixLabel) {
    result.labelPosition = config.fixLabelPosition;
  }

  if (sizable) {
    result.inputSize = props.inputSize ?? config.inputSize;
  }

  return result;
}
