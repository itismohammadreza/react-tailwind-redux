import {FormContainer} from "@powell/components/FormContainer";
import {InputMask} from "@powell/components/InputMask";
import {Button} from "@powell/components/Button";
import * as Yup from 'yup';
import {useRef, useState} from "react";
import {FormikContextType} from "formik";

export const InputMaskPage = () => {
  const [formValue, setFormValue] = useState<any>({n: ''})
  const [formContext, setFormContext] = useState<FormikContextType<any>>({})
  const formRef = useRef<HTMLFormElement>()

  const updateForm = () => {
    setFormValue({
      n: 'aaaa'
    })
  }

  return (
      <>
        <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
          <InputMask mask="99-999999" label="label" labelPosition="float" name="n"/>

          <InputMask mask="99-999999" label="label" labelPosition="fix-side" name="n"/>
          <InputMask mask="99-999999" label="label" labelPosition="fix-top" name="n"/>

          <InputMask mask="99-999999" name="n" iconPosition="right" icon="pi pi-search"/>
          <InputMask mask="99-999999" name="n" iconPosition="left" icon="pi pi-search"/>

          <InputMask mask="99-999999" addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
          <InputMask mask="99-999999" addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

          <InputMask mask="99-999999" label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
          <InputMask mask="99-999999" label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>

          <InputMask mask="99-999999" label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                     name="n"/>
          <InputMask mask="99-999999" label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                     name="n"/>

          <InputMask mask="99-999999" label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                     addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <InputMask mask="99-999999" label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                     addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <InputMask mask="99-999999" label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                     addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <InputMask mask="99-999999" label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                     addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Button type="submit" label="submit"/>
        </FormContainer>

        <FormContainer
            ref={formRef}
            validateOnChange
            onInit={setFormContext}
            enableReinitialize={true}
            initialValues={formValue}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={
              Yup.object({
                n: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .max(20, 'Must be less  than 20 characters')
                .required('Username is required')
                .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces')
              })
            }>
          {
            (context) => (
                <>
                  <InputMask mask="99-999999" label="Username" name="n"/>
                  <Button type="submit" label="Submit"></Button>
                  <Button type="reset" label="Reset"></Button>
                  <Button label="Update" onClick={updateForm}></Button>
                </>
            )
          }
        </FormContainer>
      </>
  )
}