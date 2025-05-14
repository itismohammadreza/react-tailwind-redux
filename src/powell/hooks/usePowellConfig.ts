import {$PrimeReactContext, configService} from "@powell/api";
import {Dispatch, SetStateAction, useContext} from "react";
import {PowellConfig, SafeAny} from "@powell/models";

type BodyClassRule = {
  condition: (value: SafeAny) => boolean;
  className: string;
};

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

  const configAction: Partial<Record<keyof PowellConfig, Dispatch<SetStateAction<SafeAny>>>> = {
    pt: setPt,
    filterMatchModeOptions: setFilterMatchModeOptions,
    locale: setLocale,
    nonce: setNonce,
    hideOverlaysOnDocumentScrolling: setHideOverlaysOnDocumentScrolling,
    ripple: setRipple,
    cssTransition: setCssTransition,
    styleContainer: setStyleContainer,
    inputStyle: setInputStyle,
    nullSortOrder: setNullSortOrder,
    zIndex: setZIndex,
    autoZIndex: setAutoZIndex,
    appendTo: setAppendTo,
    theme: (v: PowellConfig) => changeTheme?.(powellConfig.theme, v.theme!, 'powell-theme-link')
  }
  const updateConfig = (c: Partial<PowellConfig>) => {
    for (const key in c) {
      if (key in configAction) {
        configAction[key as keyof PowellConfig]?.(c);
      }
      applyConfigToDom({...c, injectDirectionToRoot: powellConfig.injectDirectionToRoot});
      setPowellConfig(prev => ({...prev, ...c}));
    }
  }
  return [{...powellConfig, ...restPrimeConfig}, updateConfig] as [config: PowellConfig, (c: Partial<PowellConfig>) => any];
}

export const applyConfigToDom = (config: PowellConfig) => {
  handleBodyClasses(config);
  if ('rtl' in config && config.injectDirectionToRoot) {
    document.documentElement.setAttribute('dir', config.rtl ? 'rtl' : 'ltr');
  } else {
    document.documentElement.removeAttribute('dir');
  }
}

const kebabCase = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const handleBodyClasses = (config: PowellConfig) => {
  const specialBodyClassRules: Partial<Record<keyof PowellConfig, BodyClassRule[]>> = {
    ripple: [
      {
        condition: (v) => v === false,
        className: 'p-ripple-disabled',
      },
    ],
    inputStyle: [
      {
        condition: (v) => v === 'filled',
        className: 'p-input-filled',
      },
    ],
  };

  for (const key in config) {
    const value = config[key as keyof PowellConfig];
    if (value === undefined) continue;

    const rules = specialBodyClassRules[key as keyof PowellConfig];

    if (rules && rules.length) {
      for (const rule of rules) {
        const shouldApply = rule.condition(value);
        document.body.classList.toggle(rule.className, shouldApply);
      }
    } else {
      const prefix = `powell-${kebabCase(key)}-`;
      document.body.classList.forEach((cls) => {
        if (cls.startsWith(prefix)) {
          document.body.classList.remove(cls);
        }
      });
      const finalValue = typeof value === 'boolean' ? (value ? 'enabled' : 'disabled') : value;
      document.body.classList.add(`${prefix}${finalValue}`);
    }
  }
};

