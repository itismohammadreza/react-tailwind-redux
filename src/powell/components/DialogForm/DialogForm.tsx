import {$Dialog, $DialogProps} from "@powell/api";
import {useEffect, useRef, useState} from "react";
import {overlayEmitter} from "@powell/api/overlayEmitter.ts";

interface DialogFormProps {
  config: any[];
  props: $DialogProps & {rtl?: boolean};
}

export const DialogForm = (props: DialogFormProps) => {
  const {props: componentProps, config} = props;
  const [visible, setVisible] = useState(false);
  const isRendered = useRef(false);
  const showDialog = () => setVisible(true);

  const onHide = () => {
    setVisible(false);
    overlayEmitter.off("dialogForm", showDialog);
    componentProps.onHide();
  }

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on("dialogForm", showDialog);
  }, []);

  return (
      <$Dialog
          {...componentProps}
          onHide={onHide}
          visible={visible}>
        <p>Content</p>
      </$Dialog>
  );
};
