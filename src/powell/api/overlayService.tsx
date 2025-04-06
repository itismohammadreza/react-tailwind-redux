import {$confirmDialog, $confirmPopup, $UniqueComponentId} from "@powell/api/primereact";
import {HistoryState, SafeAny} from "@powell/models";
import {createRoot, Root} from "react-dom/client";
import {createPortal} from "react-dom";
import {overlayEmitter} from "@powell/api/overlayEmitter";
import {Dialog} from "@powell/components/Dialog";
import {DialogForm} from "@powell/components/DialogForm";

const states: HistoryState[] = [];

const showToast = (options: SafeAny) => {
  overlayEmitter.emit('toast', options)
}

const showConfirmPopup = (options: SafeAny) => {
  $confirmPopup(options);
}

const showConfirmDialog = (options: SafeAny) => {
  $confirmDialog(options);
};

const showDialog = (options: SafeAny) => {
  const getProps = (root: Root) => {
    const props = {...options};
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

const showDialogForm = (config: SafeAny[], props: SafeAny) => {
  overlayEmitter.on('dialogFormClose', (data) => {
    props.onSubmit(data)
  });

  const getProps = (root: Root) => {
    const finalProps = {...props};
    finalProps.onHide = () => {
      const timeout = setTimeout(() => {
        root.unmount();
        clearTimeout(timeout);
        props.onHide?.();
      }, 100);
    };
    return {props: finalProps, config};
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

export const overlayService = {
  showToast,
  showConfirmPopup,
  showConfirmDialog,
  showDialog,
  showDialogForm,
  closeAnyOpenDialog,
}
