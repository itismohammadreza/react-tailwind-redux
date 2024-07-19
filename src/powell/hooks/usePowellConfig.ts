import { powellConfigService } from "@powell/utils";

export const usePowellConfig = () => {
  return powellConfigService.use();
}
