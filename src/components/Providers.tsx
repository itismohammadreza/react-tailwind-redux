import {Loading} from "./Loading";
import {StoreProvider} from "@redux/StoreProvider";
import {RouterProvider} from "react-router-dom";
import {router} from "@root/router";
import {memo, PropsWithChildren} from "react";
import {PowellProvider} from "@powell/api";
import {globalConfig} from "@config/globalConfig";
import {PowellConfig} from "@powell/models";
import '@locales/i18n';
import "@styles/index.scss";

export const Providers = memo(({children}: PropsWithChildren) => {
  const powellConfig: PowellConfig = {
    rtl: globalConfig.rtl,
    ...globalConfig.powellConfig
  }
  return (
      <StoreProvider>
        <PowellProvider config={powellConfig}>
          <RouterProvider router={router}/>
          <Loading/>
          {children}
        </PowellProvider>
      </StoreProvider>
  );
})
