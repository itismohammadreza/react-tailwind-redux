import {$Toast, overlayEmitter} from "@powell/api";
import {useEffect, useRef, useState} from "react";
import {SafeAny, ToastOptions} from "@powell/models";

export const Toast = () => {
  const toast = useRef<SafeAny>(null);
  const isRendered = useRef(false);
  const [options, setOptions] = useState<ToastOptions>({});

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on('toast', options => {
      setOptions(options);
      toast.current?.show(options);
    });
  }, []);

  return (
      <$Toast
          className={`${options.className} ${options.rtl ? 'is-rtl' : 'is-ltr'}`}
          position={options.position}
          ref={toast}/>
  );
};
