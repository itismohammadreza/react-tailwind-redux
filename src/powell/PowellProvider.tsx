import { PropsWithChildren } from "react";
import { PrimeProvider } from "@powell/api";
import { PowellConfig } from "@powell/models";
import { usePowellConfig } from "@powell/hooks";

export const PowellProvider = (props: PropsWithChildren<{ config?: PowellConfig }>) => {
  const {children, config} = props;
  const [powellConfig, setPowellConfig] = usePowellConfig();
  const defaultConfig = {...powellConfig, ...config};
  setPowellConfig(defaultConfig);
  return (
      <PrimeProvider value={defaultConfig}>
        {children}
      </PrimeProvider>
  )
}
