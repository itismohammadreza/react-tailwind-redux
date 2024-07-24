import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteDropdownClickEvent,
  AutoCompleteProps,
  AutoCompleteSelectEvent,
  AutoCompleteUnselectEvent,
} from "primereact/autocomplete";
import {
  Calendar,
  CalendarDateTemplateEvent,
  CalendarMonthChangeEvent,
  CalendarMonthNavigatorTemplateEvent,
  CalendarNavigatorTemplateEvent,
  CalendarProps,
  CalendarSelectEvent,
  CalendarViewChangeEvent,
  CalendarVisibleChangeEvent,
  CalendarYearNavigatorTemplateEvent,
} from "primereact/calendar";
import {
  Checkbox,
  CheckboxChangeEvent,
  CheckboxContext,
  CheckboxPassThroughMethodOptions,
  CheckboxPassThroughOptions,
  CheckboxPassThroughType,
  CheckboxProps,
  CheckboxState
} from "primereact/checkbox";
import { Dropdown, DropdownChangeEvent, DropdownFilterEvent, DropdownProps } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { InputIcon } from 'primereact/inputicon';
import { IconField, IconFieldProps } from "primereact/iconfield";
import { InputText, InputTextProps } from "primereact/inputtext";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { Button, ButtonProps } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from "primereact/menuitem";
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
import { classNames, UniqueComponentId } from "primereact/utils";

export const PrimeAutoComplete = AutoComplete;
export type PrimeAutoCompleteProps = AutoCompleteProps;
export type PrimeAutoCompleteSelectEvent = AutoCompleteSelectEvent;
export type PrimeAutoCompleteUnselectEvent = AutoCompleteUnselectEvent;
export type PrimeAutoCompleteCompleteEvent = AutoCompleteCompleteEvent;
export type PrimeAutoCompleteChangeEvent = AutoCompleteChangeEvent;
export type PrimeAutoCompleteDropdownClickEvent = AutoCompleteDropdownClickEvent;

export const PrimeCalendar = Calendar;
export type PrimeCalendarProps = CalendarProps;
export type PrimeCalendarSelectEvent = CalendarSelectEvent;
export type PrimeCalendarNavigatorTemplateEvent = CalendarNavigatorTemplateEvent;
export type PrimeCalendarDateTemplateEvent = CalendarDateTemplateEvent;
export type PrimeCalendarMonthChangeEvent = CalendarMonthChangeEvent;
export type PrimeCalendarVisibleChangeEvent = CalendarVisibleChangeEvent;
export type PrimeCalendarViewChangeEvent = CalendarViewChangeEvent;
export type PrimeCalendarMonthNavigatorTemplateEvent = CalendarMonthNavigatorTemplateEvent;
export type PrimeCalendarYearNavigatorTemplateEvent = CalendarYearNavigatorTemplateEvent;

export const PrimeCheckbox = Checkbox;
export type PrimeCheckboxChangeEvent = CheckboxChangeEvent;
export type PrimeCheckboxPassThroughMethodOptions = CheckboxPassThroughMethodOptions;
export type PrimeCheckboxPassThroughType<T> = CheckboxPassThroughType<T>;
export type PrimeCheckboxPassThroughOptions = CheckboxPassThroughOptions;
export type PrimeCheckboxProps = CheckboxProps;
export type PrimeCheckboxState = CheckboxState;
export type PrimeCheckboxContext = CheckboxContext;

export const PrimeButton = Button;
export type PrimeButtonProps = ButtonProps;

export const PrimeInputText = InputText;
export type PrimeInputTextProps = InputTextProps;

export const PrimeInputTextarea = InputTextarea;
export type PrimeInputTextareaProps = InputTextareaProps;

export const PrimeIconField = IconField;
export type PrimeIconFieldProps = IconFieldProps;

export const PrimeFloatLabel = FloatLabel;

export const PrimeInputIcon = InputIcon;

export type PrimeAPIOptions = APIOptions;

export const PrimeDropdown = Dropdown;
export type PrimeDropdownProps = DropdownProps;
export type PrimeDropdownChangeEvent = DropdownChangeEvent;
export type PrimeDropdownFilterEvent = DropdownFilterEvent;

export const PrimeProvider = PrimeReactProvider;

export const PrimeContext = PrimeReactContext;

export const PrimePanelMenu = PanelMenu;

export const PrimeSidebar = Sidebar;

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
