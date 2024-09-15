import {usePowellConfig} from "@powell/hooks/usePowellConfig";
import {PowellConfig} from "@powell/models";

interface CommonConfigProps {
  rtl?: PowellConfig["rtl"];
  showRequiredStar?: PowellConfig["showRequiredStar"];
  inputSize?: PowellConfig["inputSize"];
  labelPosition?: PowellConfig["labelPosition"];
}

export const useApplyConfig = <T extends CommonConfigProps>(props: T, isFixLabel?: boolean) => {
  const [config] = usePowellConfig();

  const result = {
    ...props,
    rtl: props.rtl ?? config.rtl,
    showRequiredStar: props.showRequiredStar ?? config.showRequiredStar,
    labelPosition: props.labelPosition ?? config.labelPosition,
    inputSize: props.inputSize ?? config.inputSize,
  }

  if (isFixLabel) {
    result.labelPosition = config.fixLabelPosition;
  }

  return result;
}
