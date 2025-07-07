import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ConfigState, Locale} from "@models/common";
import {globalConfig} from "@config/globalConfig";

const configSlice = createSlice({
  name: "config",
  initialState: globalConfig,
  reducers: {
    changeToRtl: (state: any, action: any) => {
      state.rtl = action.payload;
    },
    changeLocale: (state: any, action: any) => {
      state.locale = action.payload;
    },
  },
});

export const {changeToRtl, changeLocale} = configSlice.actions;
export const configReducer = configSlice.reducer;
