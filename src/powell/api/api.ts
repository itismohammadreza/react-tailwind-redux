import { Button, ButtonProps } from "primereact/button";
import { classNames, UniqueComponentId } from "primereact/utils";
import { InputText, InputTextProps } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { IconField, IconFieldProps } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import {
  addLocale,
  APIOptions,
  locale,
  localeOption,
  localeOptions,
  PrimeReactContext,
  PrimeReactProvider,
  updateLocaleOption,
  updateLocaleOptions,
  ZIndexOptions
} from "primereact/api";
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from "primereact/sidebar";
import { MenuItem } from "primereact/menuitem";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { Dropdown, DropdownChangeEvent, DropdownProps } from "primereact/dropdown";

export const PrimeButton = Button;
export type PrimeButtonProps = ButtonProps;
export const PrimeInputText = InputText;
export const PrimeInputTextarea = InputTextarea;
export type PrimeInputTextProps = InputTextProps;
export type PrimeInputTextareaProps = InputTextareaProps;
export const PrimeFloatLabel = FloatLabel;
export const PrimeIconField = IconField;
export type PrimeIconFieldProps = IconFieldProps;
export const PrimeInputIcon = InputIcon;
export type PrimeAPIOptions = APIOptions;
export type PrimeDropdownChangeEvent = DropdownChangeEvent;
export const PrimeProvider = PrimeReactProvider;
export const PrimeContext = PrimeReactContext;
export const PrimePanelMenu = PanelMenu;
export const PrimeSidebar = Sidebar;
export const PrimeDropdown = Dropdown;
export type PrimeDropdownProps = DropdownProps;
export type PrimeMenuItem = MenuItem;
export type PrimeZIndexOptions = ZIndexOptions;
export const primeLocale = locale;
export const primeAddLocale = addLocale;
export const primeUpdateLocaleOption = updateLocaleOption;
export const primeUpdateLocaleOptions = updateLocaleOptions;
export const primeLocaleOption = localeOption;
export const primeLocaleOptions = localeOptions;
export const PrimeUniqueComponentId = UniqueComponentId;
export const primeClassNames = classNames;
