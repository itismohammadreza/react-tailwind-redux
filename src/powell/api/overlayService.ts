import {FC} from "react";
import {$UniqueComponentId} from "@powell/api/primereact.ts";
import {HistoryState, SafeAny} from "@powell/models";

const states: HistoryState[] = [];

const open = (component: FC, config: SafeAny) => {
}
const showToast = (options: SafeAny) => {
}
const showConfirmPopup = (options: SafeAny) => {
}
const showConfirmDialog = (options: SafeAny) => {
}
const showDialog = (options: SafeAny) => {
}
const showDialogForm = (options: SafeAny) => {
}
const closeAnyOpenDialog = () => {
}

const addToBody = (component: SafeAny) => {

}

const removeFromBody = (component: SafeAny) => {
  if (!component) {
    return;
  }
}

const bodyContains = (component: SafeAny) => {
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
  open,
  showToast,
  showConfirmPopup,
  showConfirmDialog,
  showDialog,
  showDialogForm,
  closeAnyOpenDialog,
}
