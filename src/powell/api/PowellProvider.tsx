import {PropsWithChildren} from "react";
import {$ConfirmDialog, $ConfirmPopup, $PrimeReactProvider, configService, powellDefaults} from "@powell/api";
import {PowellConfig, ThemeName} from "@powell/models";
import {Toast} from "@powell/components/Toast";
import {applyConfigToDom} from "@powell/hooks";

const createThemeLink = () => {
  const headEl = document.head;
  const linkEl = document.createElement("link");
  linkEl.rel = "stylesheet";
  linkEl.type = "text/css";
  linkEl.id = "powell-theme-link";
  headEl.appendChild(linkEl);
  return linkEl;
}

const applyTheme = (theme: ThemeName) => {
  let themeEl: HTMLLinkElement = document.getElementById('powell-theme-link') as HTMLLinkElement;
  if (!themeEl) {
    themeEl = createThemeLink();
  }
  const themeLink = `/src/powell/themes/${theme}.css`;
  themeEl.setAttribute('href', themeLink);
}

export const PowellProvider = (props: PropsWithChildren<{config?: PowellConfig}>) => {
  const {children, config} = props;
  const defaultConfig: PowellConfig = {
    ...powellDefaults,
    ...config
  };
  configService.set(defaultConfig);
  applyConfigToDom(defaultConfig);
  applyTheme(defaultConfig.theme!);
  return (
      <$PrimeReactProvider value={defaultConfig}>
        <Toast/>
        <$ConfirmDialog/>
        <$ConfirmPopup/>
        {children}
      </$PrimeReactProvider>
  )
}
