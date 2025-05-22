import {SafeAny} from "@powell/models";
import {ReactElement} from "react";
import {dropdownOptionsMap} from "@pages/main/showcase/constants/dropdown-options-map";

export interface PreviewOption<T extends Record<string, SafeAny> = null> {
  field: keyof T & string;
  value: SafeAny;
  selectOptions?: keyof typeof dropdownOptionsMap;
}

export interface PreviewProps<T = SafeAny> {
  options: PreviewOptionsProps<T>["options"];
  component: string;
  description: string;
  withForm?: boolean;
  onOptionChange?: (event: PreviewOption) => void;
  children?: ReactElement;
}

export interface PreviewOptionsProps<T = SafeAny> {
  options: PreviewOption<Partial<T>>[];
  onOptionChange: (option: PreviewOption<T>) => void;
}
