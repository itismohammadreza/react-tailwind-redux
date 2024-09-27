import {$ButtonProps} from "@powell/api";
import {ButtonAppearance, Position, SafeAny} from "@powell/models";
import {MouseEvent} from "react";

export type LabelPosition = 'float' | 'fix-side' | 'fix-top';
export type FixLabelPosition = Exclude<LabelPosition, 'float'>;
export type IconPosition = Exclude<Position, 'top' | 'bottom'>;

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
  before?: AddonConfig;
  after?: AddonConfig;
}

// todo: make transform type [usage] generic in components (remove SafeAny from utils.service)
export type TransformOptions<V = SafeAny, T = SafeAny> = {
  value: V;
  onChange: (...event: V[]) => void;
  transform?: {
    input?: (value: V) => SafeAny;
    output?: (...event: T[]) => SafeAny;
  }
}
