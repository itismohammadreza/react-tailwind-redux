import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfigState, Locale } from "@models/common";
import { globalConfig } from "@config/globalConfig";
import { ThemeName } from "@powell/models";

const configSlice = createSlice({
  name: "config",
  initialState: globalConfig,
  reducers: {
    changeTheme: (state: ConfigState, action: PayloadAction<ThemeName>) => {
      state.theme = action.payload;
    },
    changeToRtl: (state: ConfigState, action: PayloadAction<boolean>) => {
      state.rtl = action.payload;
    },
    changeLocale: (state: ConfigState, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

export const {changeTheme, changeToRtl, changeLocale} = configSlice.actions;
export const configReducer = configSlice.reducer;
