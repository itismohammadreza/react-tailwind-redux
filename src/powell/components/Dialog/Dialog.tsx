import {$Dialog} from "@powell/api";
import {useEffect, useRef, useState} from "react";
import {overlayEmitter} from "@powell/api/overlayEmitter";
import {DialogOptions} from "@powell/models";

export const Dialog = (props: DialogOptions) => {
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
      <$Dialog {...props} onHide={onHide} visible={visible}>
        {typeof props?.children === 'function' ? props.children(onHide) : props.children}
      </$Dialog>
  );
};
