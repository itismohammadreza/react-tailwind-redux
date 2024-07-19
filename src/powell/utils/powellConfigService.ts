import { globalState } from "@powell/utils";
import { PowellConfig } from "@powell/models";

export const powellConfigService = globalState<PowellConfig>({
  rtl: false,
  showRequiredStar: true,
  formVariant: 'outlined',
  ripple: true
});
