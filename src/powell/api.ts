import { Button, ButtonProps } from "primereact/button";
import { classNames, UniqueComponentId } from "primereact/utils";
import { InputText, InputTextProps } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { IconField, IconFieldProps } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { APIOptions, PrimeReactProvider } from "primereact/api";

export const PrimeButton = Button;
export type PrimeButtonProps = ButtonProps;
export const PrimeInputText = InputText;
export type PrimeInputTextProps = InputTextProps;
export const PrimeFloatLabel = FloatLabel;
export const PrimeIconField = IconField;
export type PrimeIconFieldProps = IconFieldProps;
export const PrimeInputIcon = InputIcon;
export type PrimeAPIOptions = APIOptions;
export const PrimeProvider = PrimeReactProvider;

export const PrimeUniqueComponentId = UniqueComponentId;
export const primeClassNames = classNames;
