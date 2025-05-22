import {
  $AutoCompleteProps,
  $ButtonProps,
  $CascadeSelectProps,
  $CheckboxProps,
  $ChipsProps,
  $ColorPickerProps,
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
  $ToggleButtonProps,
  $TreeSelectProps,
  $TriStateCheckboxProps
} from "@powell/api";
import {MouseEvent, ReactNode} from "react";
import {ButtonAppearance, CssObject, Orientation, SafeAny, Size} from "@powell/models/common";
import {Addon, FieldControlMeta, FixLabelPosition, LabelPosition} from "@powell/models/forms";
import {DialogFormConfig, DialogFormOptions, DialogFormSubmitEvent} from "@powell/models/overlay.ts";

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
  labelWidth?: number;
  icon?: string | ReactNode;
  hint?: string;
  id?: string;
  inputSize?: Size;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
  errorElement?: ReactNode;
  className?: string;
  containerStyle?: CssObject;
  disabled?: boolean;
}

export type HasSize = Pick<FieldLayoutProps, "inputSize">;

export type HasIcon = Pick<FieldLayoutProps, "icon" | "iconPosition">;

export type HasAddon = Pick<FieldLayoutProps, "addon">

export type HasLabel<T> = {
  labelPosition?: T;
}

export type HasControl =
    Pick<FieldControlProps, "name" | "parseError">
    & Pick<FieldLayoutProps, "showRequiredStar" | "hint" | "label" | "labelWidth" | "rtl" | "containerStyle">;

export type CommonFieldControlProps = HasControl & HasAddon & HasSize & HasIcon & HasLabel<LabelPosition>;
export type FixFieldControlProps = HasControl & HasLabel<FixLabelPosition>;

export type AutoCompleteProps = $AutoCompleteProps & CommonFieldControlProps;
export type InputTextProps = $InputTextProps & CommonFieldControlProps & {showClear?: boolean};
export type CascadeSelectProps = $CascadeSelectProps & CommonFieldControlProps;
export type CheckboxProps = Partial<$CheckboxProps> & FixFieldControlProps;
export type ChipsProps = $ChipsProps & CommonFieldControlProps;
export type ColorPickerProps = $ColorPickerProps & FixFieldControlProps;
export type DropdownProps = $DropdownProps & CommonFieldControlProps;
export type EditorProps = $EditorProps & FixFieldControlProps;
export type InputMaskProps = $InputMaskProps & CommonFieldControlProps;
export type InputNumberProps = $InputNumberProps & CommonFieldControlProps;
export type InputOtpProps = $InputOtpProps & FixFieldControlProps;
export type InputPasswordProps = $PasswordProps & CommonFieldControlProps & {showClear?: boolean};
export type InputSwitchProps = Partial<$InputSwitchProps> & FixFieldControlProps;
export type InputTextareaProps = $InputTextareaProps & Omit<CommonFieldControlProps, 'inputSize'>;
export type KnobProps = $KnobProps & FixFieldControlProps;
export type ListBoxProps = $ListBoxProps & FixFieldControlProps;
export type MentionProps = $MentionProps & CommonFieldControlProps;
export type MultiSelectProps = $MultiSelectProps & CommonFieldControlProps;
export type MultiStateCheckboxProps = $MultiStateCheckboxProps & FixFieldControlProps;
export type RadioGroupProps = $RadioButtonProps & FixFieldControlProps & {
  orientation?: Orientation,
  options?: SafeAny[];
  optionLabel?: string;
  optionValue?: string;
};
export type RatingProps = $RatingProps & FixFieldControlProps;
export type SelectButtonProps = $SelectButtonProps & FixFieldControlProps;
export type SliderProps = $SliderProps & FixFieldControlProps;
export type ToggleButtonProps = $ToggleButtonProps & FixFieldControlProps;
export type TreeSelectProps = $TreeSelectProps & CommonFieldControlProps;
export type TriStateCheckboxProps = $TriStateCheckboxProps & FixFieldControlProps;

export type ButtonState = 'default' | 'loading' | 'next';

export type ButtonTemplateType = Pick<ButtonProps, "label" | "icon" | "raised" | "appearance" | "severity">;

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

export interface DialogFormProps {
  config: DialogFormConfig[];
  submitDisabled?: boolean | ((dialogFormEvent?: SafeAny) => boolean);
  onSubmit?: (event: DialogFormSubmitEvent) => void;
  dialogOptions?: Omit<Partial<DialogFormOptions>, "children">;
  validationSchema?: FormContainerProps["validationSchema"];
  initialValues?: FormContainerProps["initialValues"];
}

export interface FormContainerProps<T = $FormikValues> extends $FormikConfig<T> {
  onInit?: (context: $FormikContextType<T>) => void;
}
