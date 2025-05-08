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
  $FieldProps,
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
import {IconType} from "primereact/utils";
import {FormContainerProps} from "@powell/components/FormContainer";

export type ButtonState = 'default' | 'loading' | 'next';
export type ButtonTemplateType = Pick<ButtonProps, "label" | "icon" | "raised" | "appearance" | "severity">;

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

export interface WithControl<T> {

}

export interface AutoCompleteProps extends $AutoCompleteProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  inputSize?: Size;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}


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

export interface CascadeSelectProps extends $CascadeSelectProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  inputSize?: Size;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export interface CheckboxProps extends Omit<$CheckboxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface ChipsProps extends $ChipsProps {
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

export interface ColorPickerProps extends $ColorPickerProps {
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

export interface DialogProps extends $DialogProps {
  rtl?: boolean;
}

export interface DialogFormProps<T extends $FormikValues = SafeAny> {
  config: SafeAny[];
  props: $DialogProps & FormContainerProps<T> & {rtl?: boolean};
}

export interface DropdownProps extends $DropdownProps {
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

export interface EditorProps extends $EditorProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export interface FormContainerProps<T extends $FormikValues> extends $FormikConfig<T> {
  onInit?: (context: $FormikContextType<T>) => void;
  className?: string;
}

export interface InputMaskProps extends $InputMaskProps {
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

export interface InputNumberProps extends $InputNumberProps {
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

export interface InputOtpProps extends $InputOtpProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  inputSize?: Size;
  labelPosition?: FixLabelPosition;
}

export interface InputPasswordProps extends $PasswordProps {
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

export interface InputSwitchProps extends Omit<$InputSwitchProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface InputTextareaProps extends $InputTextareaProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export interface KnobProps extends Omit<$KnobProps, 'checked'> {
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface ListBoxProps extends Omit<$ListBoxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface MentionProps extends $MentionProps {
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

export interface MultiSelectProps extends $MultiSelectProps {
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

export interface MultiStateCheckboxProps extends Omit<$MultiStateCheckboxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface RadioGroupProps extends Omit<$RadioButtonProps, 'checked'> {
  checked?: boolean;
  name: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
  options: SafeAny[];
  optionLabel?: string;
  optionValue?: string;
}

export interface RatingProps extends Omit<$RatingProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface SelectButtonProps extends Omit<$SelectButtonProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface SliderProps extends Omit<$SliderProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface ToastProps extends $ToastProps {
  rtl?: boolean;
}

export interface ToggleButtonProps extends Omit<$ToggleButtonProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export interface TreeSelectProps extends $TreeSelectProps {
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

export interface TriStateCheckboxProps extends Omit<$TriStateCheckboxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}
