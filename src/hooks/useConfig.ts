import { useDispatch, useSelector } from "react-redux";
import { selectConfig } from "@redux/selectors/configSelector";
import { ConfigState } from "@models/common";
import { changeLocale, changeToRtl } from "@redux/slices/configSlice";
import { useTranslation } from "react-i18next";
import { usePowellConfig } from "@powell/hooks";
import { PowellConfig } from "@powell/models";

export const useConfig = () => {
  const appConfig = useSelector(selectConfig);
  const [powellConfig, setPowellConfig] = usePowellConfig();
  const dispatch = useDispatch();
  const {i18n} = useTranslation();
  const actions = {
    locale: (c: Partial<ConfigState>) => {
      dispatch(changeLocale(c.locale!));
      i18n.changeLanguage(c.locale);
    },
    rtl: (c: Partial<ConfigState>) => {
      dispatch(changeToRtl(c.rtl!));
      setPowellConfig({rtl: c.rtl!});
    },
  }
  return [
    {...appConfig, powellConfig},
    (config: Partial<ConfigState>) => {
      for (const key in config) {
        if (key in actions) {
          actions[key](config);
        } else {
          setPowellConfig(config.powellConfig as PowellConfig);
        }
      }
    }
  ] as [ConfigState, (config: Partial<ConfigState>) => void]
}
