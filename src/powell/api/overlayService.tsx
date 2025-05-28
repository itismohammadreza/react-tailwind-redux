import {$confirmDialog, $confirmPopup, $UniqueComponentId, configService, overlayEmitter} from "@powell/api";
import {
  ConfirmDialogOptions,
  ConfirmPopupOptions,
  DialogFormProps,
  DialogFormSubmitEvent,
  DialogOptions,
  HistoryState,
  SafeAny,
  Size,
  ToastOptions
} from "@powell/models";
import {createRoot, Root} from "react-dom/client";
import {createPortal} from "react-dom";
import {Dialog} from "@powell/components/Dialog";
import {DialogForm} from "@powell/components/DialogForm";

const states: HistoryState[] = [];

const showToast = (options: ToastOptions) => {
  const defaultOptions: ToastOptions = {
    sticky: false,
    life: 3000,
    closable: true,
    position: 'top-right',
    ...options
  }
  overlayEmitter.emit('toast', defaultOptions);
}

const showConfirmPopup = (options: ConfirmPopupOptions) => {
  const defaultOptions: ConfirmPopupOptions = {
    buttonFull: false,
    acceptSeverity: "success",
    acceptAppearance: "outlined",
    rejectSeverity: "danger",
    rejectAppearance: "outlined",
    rtl: configService.get().rtl,
    ...options
  }
  return $confirmPopup({
    ...defaultOptions,
    className: `${options.className} ${options.buttonFull ? 'is-button-full' : ''} ${options.rtl ? 'is-rtl' : 'is-ltr'}`,
    acceptClassName: `${options.acceptClassName} p-button-${options.acceptAppearance} p-button-${options.acceptSeverity} p-button-${getSizeRqualivant(options.buttonSize)}`,
    rejectClassName: `${options.rejectClassName} p-button-${options.rejectAppearance} p-button-${options.rejectSeverity} p-button-${getSizeRqualivant(options.buttonSize)}`
  });
}

const showConfirmDialog = (options: ConfirmDialogOptions) => {
  const defaultOptions: ConfirmDialogOptions = {
    buttonFull: false,
    acceptSeverity: "success",
    acceptAppearance: "outlined",
    rejectSeverity: "danger",
    rejectAppearance: "outlined",
    rtl: configService.get().rtl,
    ...options
  }
  return $confirmDialog({
    ...defaultOptions,
    className: `${options.className} ${options.buttonFull ? 'is-button-full' : ''} ${options.rtl ? 'is-rtl' : 'is-ltr'}`,
    acceptClassName: `${options.acceptClassName} p-button-${options.acceptAppearance} p-button-${options.acceptSeverity} p-button-${getSizeRqualivant(options.buttonSize)}`,
    rejectClassName: `${options.rejectClassName} p-button-${options.rejectAppearance} p-button-${options.rejectSeverity} p-button-${getSizeRqualivant(options.buttonSize)}`
  });
};

const showDialog = (options: DialogOptions) => {
  const getProps = (root: Root) => {
    const props = {
      className: `${options.className} ${options.rtl ? 'is-rtl' : 'is-ltr'}`,
      ...options
    };
    // override options onHide method
    props.onHide = () => {
      const timeout = setTimeout(() => {
        root.unmount();
        clearTimeout(timeout);
        options.onHide?.();
      }, 100);
    };
    return props;
  }

  renderComponent(Dialog, getProps);
  const timeout = setTimeout(() => {
    overlayEmitter.emit('dialog', true);
    clearTimeout(timeout);
  }, 0);
}

const showDialogForm = (options: DialogFormProps) => {
  const {dialogOptions, ...formOptions} = options;
  const defaultProps: DialogFormProps = {
    ...options,
    dialogOptions: {
      acceptLabel: 'ثبت',
      acceptVisible: true,
      acceptSeverity: 'success',
      acceptAppearance: 'default',
      rejectLabel: 'بستن',
      rejectVisible: true,
      rejectSeverity: 'danger',
      rejectAppearance: 'outlined',
      ...dialogOptions,
    }
  }
  overlayEmitter.on('dialogFormClose', (data: DialogFormSubmitEvent) => {
    formOptions.onSubmit(data)
  });

  const getProps = (root: Root) => {
    const finalProps = {...defaultProps};
    if (finalProps.dialogOptions) {
      finalProps.dialogOptions.onHide = () => {
        const timeout = setTimeout(() => {
          root.unmount();
          clearTimeout(timeout);
          dialogOptions?.onHide?.();
        }, 100);
      };
    }
    return finalProps;
  }

  renderComponent(DialogForm, getProps);

  const timeout = setTimeout(() => {
    overlayEmitter.emit('dialogFormOpen', true);
    clearTimeout(timeout);
  }, 0);
}

const closeAnyOpenDialog = () => {
}

const renderComponent = (Component: SafeAny, getProps?: (root: Root) => SafeAny) => {
  const div = document.createElement('div');
  const root = createRoot(div);
  const props = getProps?.(root);
  const portal = createPortal(<Component {...props} />, div)
  root.render(portal);
}

const pushState = (state: HistoryState) => {
  if (!state.key) {
    state.key = $UniqueComponentId();
  }
  window.history.pushState(state, '', window.location.pathname);
  states.push(state);
}

const popState = () => {
  window.history.back();
}

const stateChange = () => {
  // return this.stateChangeSubject.asObservable()
}

const isPopped = (state: HistoryState) => {
  return states.findIndex(s => s.key === state.key && s.component === state.component) === -1;
}

const getSizeRqualivant = (size: Size) => {
  const sizeMap: Record<Size, string> = {
    large: 'lg',
    small: 'sm',
  }
  return sizeMap[size];
}

export const overlayService = {
  showToast,
  showConfirmPopup,
  showConfirmDialog,
  showDialog,
  showDialogForm,
  closeAnyOpenDialog,
}
