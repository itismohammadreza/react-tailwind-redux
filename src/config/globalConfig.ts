import { ConfigState } from "@models/common";

export const globalConfig: Readonly<ConfigState> = {
  paletteMode: "light",
  rtl: true,
  locale: "faIr",
  langStorageKey: "lng",
  apiUrl: import.meta.env.VITE_API_URL!,
  requestTimeout: 15000,
}

