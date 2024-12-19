import {$Dialog, $DialogProps, $FormikValues, configService, PowellProvider} from "@powell/api";
import {useEffect, useRef, useState} from "react";
import {overlayEmitter} from "@powell/api/overlayEmitter.ts";
import {FormContainer, FormContainerProps} from "@powell/components/FormContainer";
import {Button} from "@powell/components/Button";
import {SafeAny} from "@powell/models";
import {InputText} from "@powell/components/InputText";

interface DialogFormProps<T extends $FormikValues = SafeAny> {
  config: any[];
  props: $DialogProps & FormContainerProps<T> & {rtl?: boolean};
}

export const DialogForm = (props: DialogFormProps) => {
  const {props: componentProps, config} = props;
  const [visible, setVisible] = useState(false);
  const isRendered = useRef(false);
  const showDialog = () => setVisible(true);
  const powellConfig = configService.get();

  const onHide = () => {
    setVisible(false);
    overlayEmitter.off("dialogForm", showDialog);
    componentProps.onHide();
  }

  const onSubmit = (values) => {
    console.log(values)
  }

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on("dialogForm", showDialog);
  }, []);

  return (
      <PowellProvider config={powellConfig}>
        <$Dialog
            onHide={onHide}
            visible={visible}>
          <FormContainer
              validationSchema={componentProps.validationSchema}
              initialValues={{}}
              onSubmit={onSubmit}>
            {
              config.map(item => {
                switch (item.component) {
                  case 'input-text':
                    return <InputText key={item.field} name={item.field} {...item}/>
                  default:
                    return <></>
                }
              })
            }
            <Button type="submit" label="ثبت"/>
          </FormContainer>
        </$Dialog>
      </PowellProvider>
  );
};
