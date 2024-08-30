import {ReactNode} from "react";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {UserState} from "@models/business";
import {PowellConfig} from "@powell/models";

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type Locale = 'faIR' | 'enUS';

export interface RequestConfig {
  pathTemplate?: string | RegExp,
  method: RequestMethod;
  // null: default message, false: don't show message, string: custom message
  successMessage?: string | null | false | ((request: AxiosRequestConfig<any>, response?: AxiosResponse) => string | null | false);
  failureMessage?: string | null | false | ((request: AxiosRequestConfig<any>, response?: AxiosResponse) => string | null | false);
  loading?: boolean | ((request: AxiosRequestConfig<any>) => boolean);
  isCustomApi?: boolean;
  loadingOnlyOnce?: boolean;
  timeout?: number | 'none' | ((request: AxiosRequestConfig<any>) => number | 'none');
}

export type Events = {
  showToast: any;
  loading: boolean;
}

export interface ConfigState {
  rtl: boolean;
  locale: Locale;
  langStorageKey: string;
  apiUrl: string;
  requestTimeout: number;
  powellConfig: Omit<PowellConfig, 'rtl'>;
}

export interface RootState {
  user: UserState;
  config: ConfigState;
}

export type WithChildren<T = any> = { children: ReactNode; } & T;
