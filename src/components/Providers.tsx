import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "@root/router";
import { memo, PropsWithChildren } from "react";
import { PowellProvider } from "@powell/api";
import { globalConfig } from "@config/globalConfig";
import '@locales/i18n';
import "@styles/global.scss";

export const Providers = memo(({children}: PropsWithChildren) => {
  return (
      <StoreProvider>
        <PowellProvider config={globalConfig}>
          <RouterProvider router={router}/>
          <Loading/>
          <Toast/>
          {children}
        </PowellProvider>
      </StoreProvider>
  );
})
