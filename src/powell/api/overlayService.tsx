import {$confirmDialog, $confirmPopup, $UniqueComponentId} from "@powell/api/primereact.ts";
import {HistoryState, SafeAny} from "@powell/models";
import {createRoot} from "react-dom/client";

class ToastEmitter {
  private listeners: ((options: any) => void)[] = [];

  onToast(listener: (options: any) => void) {
    if (!this.listeners) {
      this.listeners = [];
    }
    this.listeners.push(listener);
  }

  show(options: any) {
    if (this.listeners) {
      this.listeners.forEach(listener => listener(options));
    }
  }
}

export const toastService = new ToastEmitter();

const states: HistoryState[] = [];

const showToast = (options: SafeAny) => {
  toastService.show(options)
}

const showConfirmPopup = (options: SafeAny) => {
  $confirmPopup(options);
}

const showConfirmDialog = (options: SafeAny) => {
  $confirmDialog(options);
};

const showDialog = (options: SafeAny) => {
  // const div = document.createElement('div');
  // const rootInstance = createRoot(div);
  // const onHide = () => {
  //   const timeout = setTimeout(() => {
  //     rootInstance.unmount();
  //     clearTimeout(timeout);
  //   }, 300);
  // };
  // const portal = createPortal(<$ConfirmDialog onHide={onHide}/>, div)
  // rootInstance.render(portal);
  // const timeout = setTimeout(() => {
  //   clearTimeout(timeout);
  // }, 0);
}

const showDialogForm = (options: SafeAny) => {
}

const closeAnyOpenDialog = () => {
}

export const addToBody = (Component: any, props?: SafeAny) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<Component {...props} />);
  return () => {
    root.unmount();
    document.body.removeChild(container);
  };
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

export const overlayService = {
  showToast,
  showConfirmPopup,
  showConfirmDialog,
  showDialog,
  showDialogForm,
  closeAnyOpenDialog,
}
