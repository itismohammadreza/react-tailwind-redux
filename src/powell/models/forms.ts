import {PrimeButtonProps} from "@powell/api";
import {ButtonAppearance, Position} from "@powell/models";
import {MouseEvent} from "react";

export type LabelPosition = 'float' | 'fix-side' | 'fix-top';
export type FixLabelPosition = Exclude<LabelPosition, 'float'>;
export type IconPosition = Exclude<Position, 'top' | 'bottom'>;

export interface AddonConfig {
  type: 'button' | 'icon' | 'text';
  label?: string;
  severity?: PrimeButtonProps["severity"];
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
