import {$Toast} from "@powell/api";
import {useEffect, useRef} from "react";
import {SafeAny, ToastProps} from "@powell/models";
import {overlayEmitter} from "@powell/api/overlayEmitter";

export const Toast = (prop: ToastProps) => {
  const toast = useRef<SafeAny>(null);
  const isRendered = useRef(false);

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on('toast', options => {
      toast.current?.show(options);
    });
  }, []);

  return (
      <$Toast {...prop} ref={toast}/>
  );
};
