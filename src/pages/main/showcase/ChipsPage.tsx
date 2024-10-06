import {FormContainer} from "@powell/components/FormContainer";
import {Chips} from "@powell/components/Chips";
import {Button} from "@powell/components/Button";
import {useRef, useState} from "react";
import {$FormikContextType, $Yup} from "@powell/api";

export const ChipsPage = () => {
  const [formValue, setFormValue] = useState<any>({n: ''})
  const [formContext, setFormContext] = useState<$FormikContextType<any>>({})
  const formRef = useRef<HTMLFormElement>()

  const updateForm = () => {
    setFormValue({
      n: 'aaaa'
    })
  }
  const [value, setValue] = useState([]);
  return (
      <>
        <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
          <Chips label="label" labelPosition="float" name="n"/>

          <Chips label="label" labelPosition="fix-side" name="n"/>
          <Chips label="label" labelPosition="fix-top" name="n"/>

          <Chips name="n" iconPosition="right" icon="pi pi-search"/>
          <Chips name="n" iconPosition="left" icon="pi pi-search"/>

          <Chips addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
          <Chips addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

          <Chips label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
          <Chips label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>

          <Chips label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                     name="n"/>
          <Chips label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                     name="n"/>

          <Chips label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                     addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Chips label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                     addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Chips label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                     addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Chips label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
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
              $Yup.object({
                n: $Yup.string()
                .min(8, 'Must be at least 8 characters')
                .max(20, 'Must be less  than 20 characters')
                .required('Username is required')
                .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces')
              })
            }>
          {
            (context) => (
                <>
                  <Chips label="Username" name="n"/>
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
