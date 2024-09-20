import {configService, $PrimeReactContext, $ZIndexOptions} from "@powell/api";
import {useContext} from "react";
import {PowellConfig, SafeAny} from "@powell/models";

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
  } = useContext($PrimeReactContext);

  const actions: Partial<Record<keyof PowellConfig, (c: PowellConfig) => SafeAny>> = {
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
    zIndex: (v) => setZIndex?.(v.zIndex! as $ZIndexOptions),
    autoZIndex: (v) => setAutoZIndex?.(v.autoZIndex!),
    appendTo: (v) => setAppendTo?.(v.appendTo!),
    theme: (v) => changeTheme?.(powellConfig.theme, v.theme!, 'powell-theme-link')
  }
  const updateConfig = (c: Partial<PowellConfig>) => {
    for (const key in c) {
      if (key in actions) {
        actions[key as keyof PowellConfig]?.(c);
      }
      setPowellConfig(prev => ({...prev, ...c}));
    }
  }
  return [{...powellConfig, ...restPrimeConfig}, updateConfig] as [config: PowellConfig, (c: Partial<PowellConfig>) => any];
}
