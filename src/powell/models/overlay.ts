import {ButtonAppearance, CssObject, SafeAny, Severity, Size, ToastPosition} from "@powell/models/common.ts";
import {IconPosition} from "@powell/models/forms.ts";

export type DefaultFocus = 'accept' | 'reject';
export type HistoricComponent = 'confirmDialog' | 'confirmPopup' | 'dialog' | 'dialogForm' | 'bottomSheet';

export interface HistoryState {
  key?: string;
  component: HistoricComponent;
}

export interface NgToastOptions {
  autoZIndex?: boolean;
  baseZIndex?: number;
  style?: CSSStyleDeclaration;
  position?: ToastPosition;
  preventOpenDuplicates?: boolean;
  preventDuplicates?: boolean;
  showTransformOptions?: string;
  hideTransformOptions?: string;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  breakpoints?: SafeAny;
  severity?: Severity;
  summary?: string;
  detail?: string;
  id?: SafeAny;
  key?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: SafeAny;
  icon?: string;
  contentStyleClass?: string;
  styleClass?: string;
  closeIcon?: string;

  rtl?: boolean;
}

export interface NgMessageOptions {
  summary?: string;
  detail?: string;
  icon?: string;
}

export interface NgConfirmPopupOptions {
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  autoZIndex?: boolean;
  baseZIndex?: number;
  style?: CssObject;
  styleClass?: string;
  message?: string;
  key?: string;
  icon?: string;
  header?: string;
  accept?: () => SafeAny;
  reject?: () => SafeAny;
  acceptLabel?: string;
  rejectLabel?: string;
  acceptIcon?: string;
  rejectIcon?: string;
  acceptVisible?: boolean;
  rejectVisible?: boolean;
  blockScroll?: boolean;
  closeOnEscape?: boolean;
  dismissableMask?: boolean;
  defaultFocus?: DefaultFocus;
  acceptButtonStyleClass?: string;
  rejectButtonStyleClass?: string;
  target?: EventTarget;
  acceptEvent?: SafeAny;
  rejectEvent?: SafeAny;

  buttonFull?: boolean;
  acceptSeverity?: Severity;
  acceptAppearance?: ButtonAppearance;
  rejectSeverity?: Severity;
  rejectAppearance?: ButtonAppearance;
  buttonSize?: Size;
  buttonIconPos?: IconPosition;
  rtl?: boolean;
}

export interface NgConfirmDialogOptions {
  header?: string;
  icon?: string;
  message?: string;
  style?: CssObject;
  styleClass?: string;
  maskStyleClass?: string;
  acceptIcon?: string;
  acceptLabel?: string;
  closeAriaLabel?: string;
  acceptAriaLabel?: string;
  acceptVisible?: boolean;
  rejectIcon?: string;
  rejectLabel?: string;
  rejectAriaLabel?: string;
  rejectVisible?: boolean;
  acceptButtonStyleClass?: string;
  rejectButtonStyleClass?: string;
  closeOnEscape?: boolean;
  dismissableMask?: boolean;
  blockScroll?: boolean;
  closable?: boolean;
  appendTo?: SafeAny;
  key?: string;
  autoZIndex?: boolean;
  baseZIndex?: number;
  transitionOptions?: string;
  focusTrap?: boolean;
  defaultFocus?: DefaultFocus;
  breakpoints?: SafeAny;
  visible?: SafeAny;
  position?: string;

  buttonFull?: boolean
  acceptSeverity?: Severity;
  acceptAppearance?: ButtonAppearance;
  rejectSeverity?: Severity;
  rejectAppearance?: ButtonAppearance;
  buttonSize?: Size;
  buttonIconPos?: IconPosition;
  rtl?: boolean;
}

interface NgDialogBase {
  header?: string;
  draggable?: boolean;
  resizable?: boolean;
  positionLeft?: number;
  positionTop?: number;
  contentStyle?: CssObject;
  contentStyleClass?: string;
  modal?: boolean;
  closeOnEscape?: boolean;
  dismissableMask?: boolean;
  rtl?: boolean;
  closable?: boolean;
  responsive?: boolean;
  appendTo?: SafeAny;
  breakpoints?: SafeAny;
  styleClass?: string;
  maskStyleClass?: string;
  maskStyle?: CssObject;
  showHeader?: boolean;
  breakpoint?: number;
  blockScroll?: boolean;
  autoZIndex?: boolean;
  baseZIndex?: number;
  minX?: number;
  minY?: number;
  focusOnShow?: boolean;
  maximizable?: boolean;
  keepInViewport?: boolean;
  focusTrap?: boolean;
  transitionOptions?: string;
  closeIcon?: string;
  closeAriaLabel?: string;
  closeTabindex?: string;
  minimizeIcon?: string;
  maximizeIcon?: string;
  style?: CssObject;
  position?: SafeAny;
  onShow?: () => SafeAny;
  onHide?: () => SafeAny;
  visibleChange?: (event: SafeAny) => SafeAny;
  onResizeInit?: (event: SafeAny) => SafeAny;
  onResizeEnd?: (event: SafeAny) => SafeAny;
  onDragEnd?: (event: SafeAny) => SafeAny;
  onMaximize?: (event: SafeAny) => SafeAny;
}

export interface NgDialogOptions extends NgDialogBase {
  buttonStyleClass?: string;
  buttonIcon?: string;
  buttonIconPos?: IconPosition;
  buttonFull?: boolean;
  buttonLabel?: string;
  buttonSeverity?: Severity;
  buttonAppearance?: ButtonAppearance;
  buttonSize?: Size;
  content?: string;
}

export interface NgDialogFormOptions extends NgDialogBase {
  containerStyleClass?: string;
  containerStyle?: CssObject;
  defaultFocus?: DefaultFocus;
  acceptButtonStyleClass?: string;
  rejectButtonStyleClass?: string;
  acceptVisible?: boolean;
  acceptIcon?: string;
  acceptSeverity?: Severity;
  acceptLabel?: string;
  acceptAppearance?: ButtonAppearance;
  rejectVisible?: boolean;
  rejectIcon?: string;
  rejectSeverity?: Severity;
  rejectLabel?: string;
  rejectAppearance?: ButtonAppearance;
  buttonFull?: boolean;
  buttonSize?: Size;
  buttonIconPosition?: IconPosition;
  submitDisabled?: boolean | ((dialogFormEvent?: SafeAny) => boolean);
  formValidator?: {
    type: string,
    validator: SafeAny,
    message: string,
    style?: CssObject
  };
}

export interface NgDialogFormResult {
  formValue: SafeAny;
  changeDialogVisibilityTo: (visibility?: boolean) => void
}

export interface NgDialogFormValidation {
  type: SafeAny | string;
  validator: SafeAny;
  message: string | ((control: SafeAny) => string);
}

export interface NgDialogFormEvent {
  event?: SafeAny,
  form?: SafeAny;
  currentConfig?: DialogFormConfig;
  allConfig?: DialogFormConfig[];
}

export type NgDialogFormComponent =
    | 'hidden'
    | 'template'
    | 'auto-complete'
    | 'button'
    | 'cascade-select'
    | 'checkbox'
    | 'checkbox-group'
    | 'chips'
    | 'color-picker'
    | 'dropdown'
    | 'dual-label-switch'
    | 'editor'
    | 'file-picker'
    | 'file-picker2'
    | 'datepicker'
    | 'image'
    | 'input-mask'
    | 'input-number'
    | 'input-otp'
    | 'input-password'
    | 'input-text'
    | 'input-textarea'
    | 'iran-map'
    | 'knob'
    | 'listbox'
    | 'map'
    | 'message'
    | 'multi-select'
    | 'radio'
    | 'rating'
    | 'select-button'
    | 'slider'
    | 'switch'
    | 'toggle-button'
    | 'tree'
    | 'tree-select'
    | 'tri-state-checkbox'

export interface DialogFormConfig {
}
