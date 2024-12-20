import {useCallback, useEffect, useRef, useState} from "react";
import {$Dialog, $DialogProps, $FormikProps, $FormikValues, configService, PowellProvider} from "@powell/api";
import {overlayEmitter} from "@powell/api/overlayEmitter.ts";
import {FormContainer, FormContainerProps} from "@powell/components/FormContainer";
import {Button, ButtonOnClickAsyncEvent} from "@powell/components/Button";
import {SafeAny} from "@powell/models";
import {InputText} from "@powell/components/InputText";
import {AutoComplete} from "@powell/components/AutoComplete";
import {SelectButton} from "@powell/components/SelectButton";
import {Checkbox} from "@powell/components/Checkbox";
import {Chips} from "@powell/components/Chips";
import {Dropdown} from "@powell/components/Dropdown";
import {Editor} from "@powell/components/Editor";
import {InputMask} from "@powell/components/InputMask";
import {InputNumber} from "@powell/components/InputNumber";
import {InputOtp} from "@powell/components/InputOtp";
import {InputPassword} from "@powell/components/InputPassword";
import {InputSwitch} from "@powell/components/InputSwitch";
import {InputTextarea} from "@powell/components/InputTextarea";
import {Knob} from "@powell/components/Knob";
import {ListBox} from "@powell/components/ListBox";
import {Mention} from "@powell/components/Mention";
import {MultiStateCheckbox} from "@powell/components/MultiStateCheckbox";
import {RadioGroup} from "@powell/components/RadioGroup";
import {Rating} from "@powell/components/Rating";
import {Slider} from "@powell/components/Slider";
import {ToggleButton} from "@powell/components/ToggleButton";
import {TreeSelect} from "@powell/components/TreeSelect";
import {TriStateCheckbox} from "@powell/components/TriStateCheckbox";

interface DialogFormProps<T extends $FormikValues = SafeAny> {
  config: any[];
  props: $DialogProps & FormContainerProps<T> & {rtl?: boolean};
}

export const DialogForm = (props: DialogFormProps) => {
  const {props: componentProps, config} = props;
  const [visible, setVisible] = useState(false);
  const [disableReject, setDisableReject] = useState(false);
  const isRendered = useRef(false);
  const powellConfig = configService.get();
  const loadingCallbackRef = useRef<SafeAny>(null);
  const showDialog = useCallback(() => setVisible(true), []);

  const onHide = useCallback(() => {
    setVisible(false);
    overlayEmitter.off("dialogForm", showDialog);
    componentProps.onHide();
  }, [])

  const onSubmit = useCallback(async (formik: $FormikProps<any>, {event, loadingCallback}: ButtonOnClickAsyncEvent) => {
    event.preventDefault()
    const {validateForm, handleSubmit, values, setTouched, touched} = formik;
    const newTouched = config.map(c => c.field).reduce((prev, curr) => ({...prev, [curr]: true}), {});
    await setTouched({...touched, ...newTouched}, true);
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      setDisableReject(true);
      handleSubmit();
      loadingCallbackRef.current = loadingCallback;
      overlayEmitter.emit('dialogFormClose', {changeDialogVisibilityTo, values});
    } else {
      loadingCallback();
    }
  }, [])

  const changeDialogVisibilityTo = useCallback((visible: boolean) => {
    loadingCallbackRef.current();
    setDisableReject(false);
    if (!visible) {
      onHide();
    }
  }, [])

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on("dialogForm", showDialog);
  }, []);

  return (
      <PowellProvider config={powellConfig}>
        <$Dialog onHide={onHide} visible={visible}>
          <FormContainer
              validationSchema={componentProps.validationSchema}
              initialValues={{}}
              onSubmit={() => {
              }}>
            {
              (formik) => (
                  <>
                    {
                      config.map((item) => {
                        switch (item.component) {
                          case 'auto-complete':
                            return <AutoComplete key={item.field} name={item.field} {...item} />;
                          case 'button':
                            return <Button key={item.field} name={item.field} {...item} />;
                          case 'cascade-select':
                            return <SelectButton key={item.field} name={item.field} {...item} />;
                          case 'checkbox':
                            return <Checkbox key={item.field} name={item.field} {...item} />;
                          case 'chips':
                            return <Chips key={item.field} name={item.field} {...item} />;
                          case 'dropdown':
                            return <Dropdown key={item.field} name={item.field} {...item} />;
                          case 'editor':
                            return <Editor key={item.field} name={item.field} {...item} />;
                          case 'input-mask':
                            return <InputMask key={item.field} name={item.field} {...item} />;
                          case 'input-number':
                            return <InputNumber key={item.field} name={item.field} {...item} />;
                          case 'input-otp':
                            return <InputOtp key={item.field} name={item.field} {...item} />;
                          case 'input-password':
                            return <InputPassword key={item.field} name={item.field} {...item} />;
                          case 'input-switch':
                            return <InputSwitch key={item.field} name={item.field} {...item} />;
                          case 'input-text':
                            return <InputText key={item.field} name={item.field} {...item} />;
                          case 'input-textarea':
                            return <InputTextarea key={item.field} name={item.field} {...item} />;
                          case 'knob':
                            return <Knob key={item.field} name={item.field} {...item} />;
                          case 'list-box':
                            return <ListBox key={item.field} name={item.field} {...item} />;
                          case 'mention':
                            return <Mention key={item.field} name={item.field} {...item} />;
                          case 'multi-select':
                            return <Mention key={item.field} name={item.field} {...item} />;
                          case 'multi-state-checkbox':
                            return <MultiStateCheckbox key={item.field} name={item.field} {...item} />;
                          case 'radio-group':
                            return <RadioGroup key={item.field} name={item.field} {...item} />;
                          case 'rating':
                            return <Rating key={item.field} name={item.field} {...item} />;
                          case 'select-button':
                            return <SelectButton key={item.field} name={item.field} {...item} />;
                          case 'slider':
                            return <Slider key={item.field} name={item.field} {...item} />;
                          case 'toggle-button':
                            return <ToggleButton key={item.field} name={item.field} {...item} />;
                          case 'tree-select':
                            return <TreeSelect key={item.field} name={item.field} {...item} />;
                          case 'tri-state-checkbox':
                            return <TriStateCheckbox key={item.field} name={item.field} {...item} />;
                          default:
                            return null;
                        }
                      })
                    }
                    <Button async type="submit" onClickAsync={(event) => onSubmit(formik, event)} label="ثبت"/>
                  </>
              )
            }
          </FormContainer>
        </$Dialog>
      </PowellProvider>
  );
};
