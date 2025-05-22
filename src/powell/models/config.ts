import {$APIOptions} from "@powell/api";
import {Size} from "@powell/models/common";
import {FixLabelPosition, LabelPosition} from "@powell/models/forms";

export type ThemeName =
    "arya-blue" |
    "arya-green" |
    "arya-orange" |
    "arya-purple" |
    "bootstrap4-dark-blue" |
    "bootstrap4-dark-purple" |
    "bootstrap4-light-blue" |
    "bootstrap4-light-purple" |
    "fluent-light" |
    "lara-dark-amber" |
    "lara-dark-blue" |
    "lara-dark-cyan" |
    "lara-dark-green" |
    "lara-dark-indigo" |
    "lara-dark-pink" |
    "lara-dark-purple" |
    "lara-dark-teal" |
    "lara-light-amber" |
    "lara-light-blue" |
    "lara-light-cyan" |
    "lara-light-green" |
    "lara-light-indigo" |
    "lara-light-pink" |
    "lara-light-purple" |
    "lara-light-teal" |
    "luna-amber" |
    "luna-blue" |
    "luna-green" |
    "luna-pink" |
    "md-dark-deeppurple" |
    "md-dark-indigo" |
    "md-light-deeppurple" |
    "md-light-indigo" |
    "mdc-dark-deeppurple" |
    "mdc-dark-indigo" |
    "mdc-light-deeppurple" |
    "mdc-light-indigo" |
    "mira" |
    "nano" |
    "nova" |
    "nova-accent" |
    "nova-alt" |
    "rhea" |
    "saga-blue" |
    "saga-green" |
    "saga-orange" |
    "saga-purple" |
    "soho-dark" |
    "soho-light" |
    "tailwind-light" |
    "vela-blue" |
    "vela-green" |
    "vela-orange" |
    "vela-purple" |
    "viva-dark" |
    "viva-light";

type OmittedApiOptions = Omit<$APIOptions,
    "setAppendTo" |
    "setStyleContainer" |
    "setAutoZIndex" |
    "setCssTransition" |
    "setFilterMatchModeOptions" |
    "setHideOverlaysOnDocumentScrolling" |
    "setInputStyle" |
    "setLocale" |
    "setNonce" |
    "setNullSortOrder" |
    "setRipple" |
    "setZIndex" |
    "setPt" |
    "changeTheme">;

export interface PowellConfig extends OmittedApiOptions {
  theme?: ThemeName;
  rtl?: boolean;
  showRequiredStar?: boolean;
  inputSize?: Size;
  labelPosition?: LabelPosition;
  fixLabelPosition?: FixLabelPosition;
  injectDirectionToRoot?: boolean;
}

export interface ApplyConfigOptions<T> {
  isFixLabel: boolean;
  sizable: boolean;
  groups: Record<string, PropDescriptor<T>[]>
}

export interface CommonConfigProps {
  rtl?: PowellConfig["rtl"];
  showRequiredStar?: PowellConfig["showRequiredStar"];
  labelPosition?: PowellConfig["labelPosition"];
  inputSize?: PowellConfig["inputSize"];
  variant?: PowellConfig["inputStyle"];
}

export type PropDescriptor<T> =
    | keyof T & string
    | {
  key: keyof T & string;
  alias?: string;
  defaultValue?: T[keyof T] | (() => T[keyof T]);
  keepInRest?: boolean;
};
