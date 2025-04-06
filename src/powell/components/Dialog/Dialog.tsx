import {$Dialog, $DialogProps} from "@powell/api";
import {useEffect, useRef, useState} from "react";
import {overlayEmitter} from "@powell/api/overlayEmitter";
import { SafeAny } from "@powell/models";

interface DialogProps extends $DialogProps {
  rtl?: boolean;
}

export const Dialog = (props: DialogProps) => {
  const [visible, setVisible] = useState(false);
  const isRendered = useRef(false);
  const showDialog = () => setVisible(true);

  const onHide = () => {
    setVisible(false);
    overlayEmitter.off("dialog", showDialog);
    props.onHide();
  }

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on('dialog', showDialog);
  }, []);

  return (
      <$Dialog {...props} onHide={onHide} visible={visible}
               children={props.children && typeof props.children === 'function' ? (props.children as SafeAny)(onHide) : props.children}/>
  );
};
