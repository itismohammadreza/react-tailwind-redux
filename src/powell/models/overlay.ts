import {ButtonAppearance, CssObject, SafeAny, Size} from "@powell/models/common";
import {IconPosition} from "@powell/models/forms";
import {
  $ConfirmDialogProps,
  $ConfirmPopupProps,
  $DialogProps,
  $FormikValues,
  $ToastMessage,
  $ToastProps,
  $TreeProps
} from "@powell/api";
import {ReactNode} from "react";
import {
  AutoCompleteProps,
  ButtonProps,
  CascadeSelectProps,
  CheckboxProps,
  ChipsProps,
  ColorPickerProps,
  DropdownProps,
  EditorProps,
  InputMaskProps,
  InputNumberProps,
  InputOtpProps,
  InputPasswordProps,
  InputSwitchProps,
  InputTextareaProps,
  InputTextProps,
  KnobProps,
  ListBoxProps,
  MentionProps,
  MultiSelectProps,
  MultiStateCheckboxProps,
  RadioGroupProps,
  RatingProps,
  SelectButtonProps,
  SliderProps,
  ToggleButtonProps,
  TreeSelectProps,
  TriStateCheckboxProps
} from "@powell/models/props";

type _ToastOptions = $ToastProps & $ToastMessage;

export type DefaultFocus = 'accept' | 'reject';

export type HistoricComponent = 'confirmDialog' | 'confirmPopup' | 'dialog' | 'dialogForm' | 'bottomSheet';

export interface HistoryState {
  key?: string;
  component: HistoricComponent;
}

export interface ToastOptions extends _ToastOptions {
  rtl?: boolean;
}

export interface ConfirmPopupOptions extends $ConfirmPopupProps {
  buttonFull?: boolean;
  acceptSeverity?: ButtonProps["severity"];
  acceptAppearance?: ButtonAppearance;
  rejectSeverity?: ButtonProps["severity"];
  rejectAppearance?: ButtonAppearance;
  buttonSize?: Size;
  buttonIconPos?: IconPosition;
  rtl?: boolean;
}

export interface ConfirmDialogOptions extends $ConfirmDialogProps {
  buttonFull?: boolean;
  acceptSeverity?: ButtonProps["severity"];
  acceptAppearance?: ButtonAppearance;
  rejectSeverity?: ButtonProps["severity"];
  rejectAppearance?: ButtonAppearance;
  buttonSize?: Size;
  rtl?: boolean;
}

export interface DialogOptions extends Omit<Partial<$DialogProps>, "children"> {
  children: ReactNode | ((close: VoidFunction) => ReactNode);
}

export interface DialogFormOptions extends $DialogProps {
  defaultFocus?: DefaultFocus;
  containerClassName?: string;
  containerStyle?: CssObject;
  acceptVisible?: boolean;
  acceptIcon?: string;
  acceptSeverity?: ButtonProps["severity"];
  acceptLabel?: string;
  acceptAppearance?: ButtonAppearance;
  rejectVisible?: boolean;
  rejectIcon?: string;
  rejectSeverity?: ButtonProps["severity"];
  rejectLabel?: string;
  rejectAppearance?: ButtonAppearance;
  buttonFull?: boolean;
  buttonSize?: Size;
  buttonIconPosition?: IconPosition;
}

export interface DialogFormEvent {
  event?: SafeAny,
  form?: SafeAny;
  currentConfig?: DialogFormConfig;
  allConfig?: DialogFormConfig[];
}

export interface DialogFormSubmitEvent {
  values: $FormikValues;
  finalizeSubmit: (hideDialog: boolean) => void;
}

export type NgDialogFormComponent =
    | 'hidden'
    | 'template'
    | 'auto-complete'
    | 'button'
    | 'cascade-select'
    | 'checkbox'
    // | 'checkbox-group'
    | 'chips'
    | 'color-picker'
    | 'dropdown'
    // | 'dual-label-switch'
    | 'editor'
    // | 'file-picker'
    // | 'file-picker2'
    | 'datepicker'
    | 'input-mask'
    | 'input-number'
    | 'input-otp'
    | 'input-password'
    | 'input-switch'
    | 'input-text'
    | 'input-textarea'
    | 'knob'
    | 'list-box'
    // | 'map'
    | 'mention'
    | 'multi-select'
    | 'multi-state-checkbox'
    | 'radio-group'
    | 'rating'
    | 'select-button'
    | 'slider'
    | 'toggle-button'
    | 'tree'
    | 'tree-select'
    | 'tri-state-checkbox'

export type DialogFormConfig =
    Partial<AutoCompleteProps> &
    Partial<ButtonProps> &
    Partial<CascadeSelectProps> &
    Partial<CheckboxProps> &
    Partial<ChipsProps> &
    Partial<ColorPickerProps> &
    Partial<DropdownProps> &
    Partial<EditorProps> &
    Partial<InputMaskProps> &
    Partial<InputNumberProps> &
    Partial<InputOtpProps> &
    Partial<InputPasswordProps> &
    Partial<InputSwitchProps> &
    Partial<InputTextProps> &
    Partial<InputTextareaProps> &
    Partial<KnobProps> &
    Partial<ListBoxProps> &
    Partial<MentionProps> &
    Partial<MultiSelectProps> &
    Partial<MultiStateCheckboxProps> &
    Partial<RadioGroupProps> &
    Partial<RatingProps> &
    Partial<SelectButtonProps> &
    Partial<SliderProps> &
    Partial<ToggleButtonProps> &
    Partial<$TreeProps> &
    Partial<TreeSelectProps> &
    Partial<TriStateCheckboxProps> &
    {
      component: string;
      key: string;
      hidden?: boolean;
    }
