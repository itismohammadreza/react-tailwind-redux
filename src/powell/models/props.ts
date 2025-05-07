import {$FieldProps, $IconFieldProps, $InputTextProps} from "@powell/api";
import {ReactNode} from "react";
import {SafeAny, Size} from "@powell/models/common";
import {Addon, FieldControlMeta, LabelPosition} from "@powell/models/forms";
import {IconType} from "primereact/utils";

export interface FieldControlProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  children?: ReactNode | ((event: FieldControlMeta) => ReactNode);
}

export interface FieldLayoutProps {
  componentName?: string;
  variant?: InputTextProps["variant"];
  isRequired?: boolean;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  inputSize?: Size;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
  errorElement?: ReactNode;
}

export interface InputTextProps extends $InputTextProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  inputSize?: Size;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

