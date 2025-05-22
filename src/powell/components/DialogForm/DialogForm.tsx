import {useCallback, useEffect, useRef, useState} from "react";
import {$Dialog, $FormikProps, configService, PowellProvider} from "@powell/api";
import {overlayEmitter} from "@powell/api/overlayEmitter";
import {FormContainer} from "@powell/components/FormContainer";
import {Button} from "@powell/components/Button";
import {ButtonOnClickAsyncEvent, DialogFormProps, DialogFormSubmitEvent, SafeAny} from "@powell/models";
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

export const DialogForm = (props: DialogFormProps) => {
  const {dialogOptions, config, ...formOptions} = props;
  const [visible, setVisible] = useState(false);
  const [disableReject, setDisableReject] = useState(false);
  const isRendered = useRef(false);
  const powellConfig = useRef(configService.get());
  const showDialog = useCallback(() => setVisible(true), []);

  const onHide = useCallback(() => {
    setVisible(false);
    dialogOptions.onHide?.();
  }, [])

  const onSubmit = async (formik: $FormikProps<SafeAny>, {event, loadingCallback}: ButtonOnClickAsyncEvent) => {
    event.preventDefault();

    const finalizeSubmit = (hideDialog: boolean) => {
      loadingCallback();
      setDisableReject(false);
      if (hideDialog) {
        onHide();
      }
    };

    const {validateForm, handleSubmit, values, setTouched, touched} = formik;
    const newTouched = config.map(c => c.key).reduce((prev, curr) => ({...prev, [curr]: true}), {});
    await setTouched({...touched, ...newTouched}, true);
    const errors = await validateForm();
    if (Object.keys(errors).length !== 0) {
      loadingCallback();
      return;
    }
    setDisableReject(true);
    handleSubmit();
    overlayEmitter.emit('dialogFormClose', {finalizeSubmit, values} as DialogFormSubmitEvent);
  }

  useEffect(() => {
    if (isRendered.current) {
      return
    }
    isRendered.current = true;
    overlayEmitter.on('dialogFormOpen', showDialog);

    return () => {
      overlayEmitter.off('dialogFormOpen', showDialog);
      overlayEmitter.off('dialogFormClose', () => {
      });
    }
  }, []);

  return (
      <PowellProvider config={powellConfig.current}>
        <$Dialog
            {...dialogOptions}
            className={`dialog-form ${dialogOptions.className} ${dialogOptions.rtl ? 'is-rtl' : 'is-ltr'}`}
            onHide={onHide}
            visible={visible}>
          <FormContainer
              validationSchema={formOptions.validationSchema}
              initialValues={formOptions.initialValues ?? {}}
              onSubmit={() => {
              }}>
            {
              (formik) => (
                  <>
                    <div className="dialog-form-content">
                      {
                        config.map((item) => {
                          item.rtl = dialogOptions.rtl ?? powellConfig.current.rtl;
                          switch (item.component) {
                            case 'auto-complete':
                              return <AutoComplete key={item.key} name={item.key} {...item} />;
                            case 'button':
                              return <Button key={item.key} name={item.key} {...item} />;
                            case 'cascade-select':
                              return <SelectButton key={item.key} name={item.key} {...item} />;
                            case 'checkbox':
                              return <Checkbox key={item.key} name={item.key} {...item} />;
                            case 'chips':
                              return <Chips key={item.key} name={item.key} {...item} />;
                            case 'dropdown':
                              return <Dropdown key={item.key} name={item.key} {...item} />;
                            case 'editor':
                              return <Editor key={item.key} name={item.key} {...item} />;
                            case 'input-mask':
                              return <InputMask key={item.key} name={item.key} {...item} />;
                            case 'input-number':
                              return <InputNumber key={item.key} name={item.key} {...item} />;
                            case 'input-otp':
                              return <InputOtp key={item.key} name={item.key} {...item} />;
                            case 'input-password':
                              return <InputPassword key={item.key} name={item.key} {...item} />;
                            case 'input-switch':
                              return <InputSwitch key={item.key} name={item.key} {...item} />;
                            case 'input-text':
                              return <InputText key={item.key} name={item.key} {...item} />;
                            case 'input-textarea':
                              return <InputTextarea key={item.key} name={item.key} {...item} />;
                            case 'knob':
                              return <Knob key={item.key} name={item.key} {...item} />;
                            case 'list-box':
                              return <ListBox key={item.key} name={item.key} {...item} />;
                            case 'mention':
                              return <Mention key={item.key} name={item.key} {...item} />;
                            case 'multi-select':
                              return <Mention key={item.key} name={item.key} {...item} />;
                            case 'multi-state-checkbox':
                              return <MultiStateCheckbox key={item.key} name={item.key} {...item} />;
                            case 'radio-group':
                              return <RadioGroup key={item.key} name={item.key} {...item} />;
                            case 'rating':
                              return <Rating key={item.key} name={item.key} {...item} />;
                            case 'select-button':
                              return <SelectButton key={item.key} name={item.key} {...item} />;
                            case 'slider':
                              return <Slider key={item.key} name={item.key} {...item} />;
                            case 'toggle-button':
                              return <ToggleButton key={item.key} name={item.key} {...item} />;
                            case 'tree-select':
                              return <TreeSelect key={item.key} name={item.key} {...item} />;
                            case 'tri-state-checkbox':
                              return <TriStateCheckbox key={item.key} name={item.key} {...item} />;
                            default:
                              return null;
                          }
                        })
                      }
                    </div>
                    <div className="dialog-form-footer">
                      {
                          dialogOptions.rejectVisible &&
                          <Button
                              onClick={onHide}
                              autoFocus={dialogOptions.defaultFocus === 'reject'}
                              disabled={disableReject}
                              icon={dialogOptions.rejectIcon}
                              severity={dialogOptions.rejectSeverity}
                              appearance={dialogOptions.rejectAppearance}
                              label={dialogOptions.rejectLabel}
                              size={dialogOptions.buttonSize}
                              iconPos={dialogOptions.buttonIconPosition}/>
                      }
                      {
                          dialogOptions.acceptVisible &&
                          <Button
                              async
                              type="submit"
                              onClickAsync={(event) => onSubmit(formik, event)}
                              autoFocus={dialogOptions.defaultFocus === 'accept'}
                              icon={dialogOptions.acceptIcon}
                              severity={dialogOptions.acceptSeverity}
                              appearance={dialogOptions.acceptAppearance}
                              label={dialogOptions.acceptLabel}
                              size={dialogOptions.buttonSize}
                              iconPos={dialogOptions.buttonIconPosition}/>
                      }
                    </div>
                  </>
              )
            }
          </FormContainer>
        </$Dialog>
      </PowellProvider>
  );
}
