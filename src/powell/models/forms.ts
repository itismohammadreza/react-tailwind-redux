import {$ButtonProps, $FieldProps} from "@powell/api";
import {ButtonAppearance, Position, SafeAny} from "@powell/models";
import {MouseEvent, ReactNode} from "react";

export type LabelPosition = 'float' | 'side' | 'top';
export type FixLabelPosition = Exclude<LabelPosition, 'float'>;
export type IconPosition = Exclude<Position, 'top' | 'bottom'>;

export interface FieldControlMeta extends Partial<$FieldProps> {
  handleChange?: (value: SafeAny) => void;
  handleBlur?: (value: SafeAny) => void;
  isRequired?: boolean;
  errorElement?: ReactNode;
  id?: string;
}

export interface AddonConfig {
  type: 'button' | 'icon' | 'text';
  label?: string;
  severity?: $ButtonProps["severity"];
  appearance?: ButtonAppearance;
  icon?: string;
  iconPosition?: IconPosition;
  text?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface Addon {
  start?: AddonConfig;
  end?: AddonConfig;
}
