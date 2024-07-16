import { PropsWithChildren } from "react";
import { APIOptions, PrimeReactProvider } from "primereact/api";

export const PowellProvider = (props: PropsWithChildren<{ config?: APIOptions }>) => {
  const defaultConfig: APIOptions = {
    ripple: true
  }
  const {children, config = defaultConfig} = props;

  return (
      <PrimeReactProvider value={config}>
        {children}
      </PrimeReactProvider>)
}
