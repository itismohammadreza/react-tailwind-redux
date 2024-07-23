import { configService, PrimeContext, PrimeZIndexOptions } from "@powell/api";
import { useContext } from "react";
import { PowellConfig } from "@powell/models";

export const usePowellConfig = () => {
  const [powellConfig, setPowellConfig] = configService.use();
  const {
    setPt,
    setFilterMatchModeOptions,
    setLocale,
    setNonce,
    setHideOverlaysOnDocumentScrolling,
    setRipple,
    setCssTransition,
    setStyleContainer,
    setInputStyle,
    setNullSortOrder,
    setZIndex,
    setAutoZIndex,
    setAppendTo,
    changeTheme,
    ...restPrimeConfig
  } = useContext(PrimeContext);

  const actions: Partial<Record<keyof PowellConfig, (c: PowellConfig) => any>> = {
    pt: (v) => setPt?.(v.pt!),
    filterMatchModeOptions: (v) => setFilterMatchModeOptions?.(v.filterMatchModeOptions!),
    locale: (v) => setLocale?.(v.locale!),
    nonce: (v) => setNonce?.(v.nonce!),
    hideOverlaysOnDocumentScrolling: (v) => setHideOverlaysOnDocumentScrolling?.(v.hideOverlaysOnDocumentScrolling!),
    ripple: (v) => {
      setRipple?.(v.ripple!);
      if (v.ripple) {
        document.body.classList.remove('p-ripple-disabled');
      } else {
        document.body.classList.add('p-ripple-disabled');
      }
    },
    cssTransition: (v) => setCssTransition?.(v.cssTransition!),
    styleContainer: (v) => setStyleContainer?.(v.styleContainer!),
    inputStyle: (v) => {
      if (v.inputStyle === 'filled') {
        document.body.classList.add('p-input-filled');
      } else {
        document.body.classList.remove('p-input-filled');
      }
      setInputStyle?.(v.inputStyle!);
    },
    nullSortOrder: (v) => setNullSortOrder?.(v.nullSortOrder!),
    zIndex: (v) => setZIndex?.(v.zIndex! as PrimeZIndexOptions),
    autoZIndex: (v) => setAutoZIndex?.(v.autoZIndex!),
    appendTo: (v) => setAppendTo?.(v.appendTo!),
    theme: (v) => changeTheme?.(powellConfig.theme, v.theme!, 'powell-theme-link')
  }
  const updateConfig = (c: Partial<PowellConfig>) => {
    for (const key in c) {
      if (key in actions) {
        actions[key](c);
      }
      setPowellConfig(prev => ({...prev, ...c}));
    }
  }
  return [{...powellConfig, ...restPrimeConfig}, updateConfig] as [config: PowellConfig, (c: Partial<PowellConfig>) => any];
}
