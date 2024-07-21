import { useDispatch, useSelector } from "react-redux";
import { selectConfig } from "@redux/selectors/configSelector";
import { ConfigState } from "@models/common";
import { changeLocale, changeTheme, changeToRtl } from "@redux/slices/configSlice";
import { useTranslation } from "react-i18next";
import { usePowellConfig } from "@powell/hooks";

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
    },
    theme: (c: Partial<ConfigState>) => {
      dispatch(changeTheme(c.theme!));
    },
  }
  return [
    {...appConfig, ...powellConfig},
    (config: Partial<ConfigState>) => {
      for (const key in config) {
        if (key in actions) {
          actions[key](config);
        }
        setPowellConfig(config);
      }
    }
  ] as [ConfigState, (config: Partial<ConfigState>) => void]
}
