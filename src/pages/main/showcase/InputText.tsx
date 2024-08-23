import {FormContainer} from "@powell/components/FormContainer";
import {MyTextField} from "@powell/components/InputText";
import {Button} from "@powell/components/Button";
import {Form, Formik, FormikProvider, useFormik} from "formik";
import * as Yup from 'yup';
import {useRef, useState} from "react";

export const InputTextPage = () => {
  // const formik = useFormik();
  // const formValue = useRef<any>({})
  const [formValue, setFormValue] = useState<any>({})

  const updateForm = () => {
    setFormValue({
      username: 'aaaa'
    })
    // formValue.current = {username: 'aaa2'}
  }
  return (
      // <FormContainer onSuccess={v => console.log(v)}>
      //   <div className="flex flex-col gap-2 p-10">
      //     <InputText label="label" labelPosition="float" name="n"/>
      //     <InputText label="label" labelPosition="fix-side" name="n"/>
      //     <InputText label="label" labelPosition="fix-top" name="n"/>
      //
      //     <InputText name="n" iconPosition="right" icon="pi pi-search"/>
      //     <InputText name="n" iconPosition="left" icon="pi pi-search"/>
      //
      //     <InputText addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
      //     <InputText addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
      //
      //     <InputText label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
      //     <InputText label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>
      //
      //     <InputText label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
      //                name="n"/>
      //     <InputText label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
      //                name="n"/>
      //
      //     <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
      //                addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
      //     <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
      //                addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
      //     <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
      //                addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
      //     <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
      //                addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
      //   </div>
      //
      //   <Button type="submit" label="submit"/>
      // </FormContainer>

      <>
        <MyTextField value={"asdddd2"} onChange={(e) => console.log(e.target.value)} label="Username22"
                     name="username222"/>
        <FormContainer
            enableReinitialize={true}
            initialValues={formValue}
            onSubmit={(values) => {
              console.log(2222)
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object({
              username: Yup.string()
              .min(8, 'Must be at least 8 characters')
              .max(20, 'Must be less  than 20 characters')
              .required('Username is required')
              .matches(
                  /^[a-zA-Z0-9]+$/,
                  'Cannot contain special characters or spaces'
              )
            })
            }>
          {
            (context) => (
                <>
                  <Button type="submit" label="Submit"></Button>
                  <Button type="reset" label="Reset"></Button>
                  <Button label="Update" onClick={updateForm}></Button>
                  <MyTextField label="Username" name="username"/>
                </>
            )
          }
        </FormContainer>
      </>
  )
}
