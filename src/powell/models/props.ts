import {
  $AutoCompleteProps,
  $ButtonProps,
  $CascadeSelectProps,
  $CheckboxProps,
  $ChipsProps,
  $ColorPickerProps,
  $DialogProps,
  $DropdownProps,
  $EditorProps,
  $FormikConfig,
  $FormikContextType,
  $FormikValues,
  $IconFieldProps,
  $InputMaskProps,
  $InputNumberProps,
  $InputOtpProps,
  $InputSwitchProps,
  $InputTextareaProps,
  $InputTextProps,
  $KnobProps,
  $ListBoxProps,
  $MentionProps,
  $MultiSelectProps,
  $MultiStateCheckboxProps,
  $PasswordProps,
  $RadioButtonProps,
  $RatingProps,
  $SelectButtonProps,
  $SliderProps,
  $ToastProps,
  $ToggleButtonProps,
  $TreeSelectProps,
  $TriStateCheckboxProps
} from "@powell/api";
import {MouseEvent, ReactNode} from "react";
import {ButtonAppearance, SafeAny, Size} from "@powell/models/common";
import {Addon, FieldControlMeta, FixLabelPosition, LabelPosition} from "@powell/models/forms";

export type ButtonState = 'default' | 'loading' | 'next';
export type ButtonTemplateType = Pick<ButtonProps, "label" | "icon" | "raised" | "appearance" | "severity">;

export interface FieldControlProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  id?: string;
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
  id?: string;
  inputSize?: Size;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
  errorElement?: ReactNode;
}

export type HasSize = {
  inputSize?: Size;
}

export type HasIcon = {
  icon?: string | ReactNode;
  iconPosition?: $IconFieldProps["iconPosition"];
}

export type HasAddon = {
  addon?: Addon;
}

export type HasLabel<T> = {
  labelPosition?: T;
}

export type HasControl = {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  hint?: string;
  label?: string;
  rtl?: boolean;
}

export type DefaultFieldControlProps = HasControl & HasAddon & HasSize & HasIcon & HasLabel<LabelPosition>;
export type FixFieldControlProps = HasControl & HasAddon & HasSize & HasIcon & HasLabel<FixLabelPosition>;

export type AutoCompleteProps = $AutoCompleteProps & DefaultFieldControlProps;
export type InputTextProps = $InputTextProps & DefaultFieldControlProps;
export type CascadeSelectProps = $CascadeSelectProps & DefaultFieldControlProps;
export type CheckboxProps = Partial<$CheckboxProps> & FixFieldControlProps;
export type ChipsProps = $ChipsProps & DefaultFieldControlProps;
export type ColorPickerProps = $ColorPickerProps & FixFieldControlProps;
export type DropdownProps = $DropdownProps & DefaultFieldControlProps;
export type EditorProps = $EditorProps & FixFieldControlProps;
export type InputMaskProps = $InputMaskProps & DefaultFieldControlProps;
export type InputNumberProps = $InputNumberProps & DefaultFieldControlProps;
export type InputOtpProps = $InputOtpProps & FixFieldControlProps;
export type InputPasswordProps = $PasswordProps & DefaultFieldControlProps;
export type InputSwitchProps = Partial<$InputSwitchProps> & FixFieldControlProps;
export type InputTextareaProps = $InputTextareaProps & Omit<DefaultFieldControlProps, 'inputSize'>;
export type KnobProps = $KnobProps & HasControl & HasLabel<LabelPosition>;
export type ListBoxProps = $ListBoxProps & FixFieldControlProps;
export type MentionProps = $MentionProps & DefaultFieldControlProps;
export type MultiSelectProps = $MultiSelectProps & DefaultFieldControlProps;
export type MultiStateCheckboxProps = $MultiStateCheckboxProps & FixFieldControlProps;
export type RadioGroupProps = $RadioButtonProps & FixFieldControlProps & {
  options: SafeAny[];
  optionLabel: string;
  optionValue: string
};
export type RatingProps = $RatingProps & FixFieldControlProps;
export type SelectButtonProps = $SelectButtonProps & FixFieldControlProps;
export type SliderProps = $SliderProps & FixFieldControlProps;
export type ToggleButtonProps = $ToggleButtonProps & FixFieldControlProps;
export type TreeSelectProps = $TreeSelectProps & DefaultFieldControlProps;
export type TriStateCheckboxProps = $TriStateCheckboxProps & FixFieldControlProps;

export interface ButtonOnClickAsyncEvent {
  loadingCallback: (ok?: boolean) => void,
  event: MouseEvent<HTMLButtonElement>
}

export interface ButtonProps extends Omit<$ButtonProps, "loading" | "link" | "text" | "outlined"> {
  async?: boolean;
  onClickAsync?: (event: ButtonOnClickAsyncEvent) => void;
  appearance?: ButtonAppearance;
  nextLabel?: string;
  nextIcon?: string;
  nextRaised?: boolean;
  nextAppearance?: ButtonAppearance;
  nextSeverity?: ButtonProps['severity'];
  state?: ButtonState;
  onStateChange?: (state: ButtonState) => void;
}

export interface DialogProps extends $DialogProps {
  rtl?: boolean;
}

export interface DialogFormProps<T extends $FormikValues = SafeAny> {
  config: SafeAny[];
  props: $DialogProps & FormContainerProps<T> & {rtl?: boolean};
}

export interface FormContainerProps<T extends $FormikValues> extends $FormikConfig<T> {
  onInit?: (context: $FormikContextType<T>) => void;
  className?: string;
}

export interface ToastProps extends $ToastProps {
  rtl?: boolean;
}
