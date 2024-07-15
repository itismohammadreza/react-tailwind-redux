import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "@root/router";
import { PropsWithChildren } from "react";
import { PrimeReactProvider } from "primereact/api";
import '@locales/i18n';
import "@styles/global.scss";

export const Providers = ({children}: PropsWithChildren) => {
  return (
      <StoreProvider>
        <PrimeReactProvider value={{ripple: true}}>
          <RouterProvider router={router}/>
          <Loading/>
          <Toast/>
          {children}
        </PrimeReactProvider>
      </StoreProvider>
  );
}
