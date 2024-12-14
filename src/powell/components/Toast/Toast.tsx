import {$Toast, $ToastProps} from "@powell/api";
import {useEffect, useRef} from "react";
import {SafeAny} from "@powell/models";
import {overlayEmitter} from "@powell/api/overlayEmitter.ts";

interface ToastProps extends $ToastProps {
  rtl?: boolean;
}

export const Toast = (prop: ToastProps) => {
  const toast = useRef<SafeAny>(null);
  const isRendered = useRef(false);

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on("toast", options => {
      toast.current?.show(options);
    });
  }, []);

  return (
      <$Toast {...prop} ref={toast}/>
  );
};
