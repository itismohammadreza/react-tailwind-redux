import { usePowellConfig } from "@powell/hooks/usePowellConfig";
import { PowellConfig } from "@powell/models";

interface CommonConfigProps {
  rtl?: PowellConfig["rtl"];
  showRequiredStar?: PowellConfig["showRequiredStar"];
  inputSize?: PowellConfig["inputSize"];
  labelPosition?: PowellConfig["labelPosition"];
  fixLabelPosition?: PowellConfig["fixLabelPosition"];
}

export const useConfigHandler = (props: CommonConfigProps) => {
  const [config] = usePowellConfig();

  return {
    ...props,
    rtl: props.rtl ?? config.rtl,
    showRequiredStar: props.showRequiredStar ?? config.showRequiredStar,
    inputSize: props.inputSize ?? config.inputSize,
    labelPosition: props.labelPosition ?? config.labelPosition,
    fixLabelPosition: props.fixLabelPosition ?? config.fixLabelPosition,
  } as any
}
