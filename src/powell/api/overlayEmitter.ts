import {SafeAny} from "@powell/models";

type ListenerFunction = (data?: SafeAny) => void;

class OverlayEmitter {
  private listeners: {[event: string]: ListenerFunction[]} = {};

  on(event: string, listener: ListenerFunction) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event: string, data?: SafeAny) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(listener => listener(data));
    }
  }

  off(event: string, listener: ListenerFunction) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(l => l !== listener);
  }
}

export const overlayEmitter = new OverlayEmitter();
