import {FormContainer} from "@powell/components/FormContainer";
import {Button} from "@powell/components/Button";
import * as Yup from 'yup';
import {useRef, useState} from "react";
import {FormikContextType} from "formik";
import {AutoComplete} from "@powell/components/AutoComplete";

export const AutoCompletePage = () => {
  const [formValue, setFormValue] = useState<any>({n: ''})
  const [formContext, setFormContext] = useState<FormikContextType<any>>({})
  const formRef = useRef<HTMLFormElement>()

  const updateForm = () => {
    setFormValue({
      n: 'aaaa'
    })
  }

  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map(item => event.query + '-' + item));
  }

  return (
      <>

        <FormContainer>
          <div className="flex flex-col gap-2 p-10">
            <AutoComplete label="label" labelPosition="float" name="n"/>

            <AutoComplete label="label" labelPosition="fix-side" name="n"/>
            <AutoComplete label="label" labelPosition="fix-top" name="n"/>

            <AutoComplete name="n" iconPosition="right" icon="pi pi-search"/>
            <AutoComplete name="n" iconPosition="left" icon="pi pi-search"/>

            <AutoComplete addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
            <AutoComplete addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

            <AutoComplete label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
            <AutoComplete label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>

            <AutoComplete label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                       name="n"/>
            <AutoComplete label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                       name="n"/>

            <AutoComplete label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                       addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
            <AutoComplete label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                       addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
            <AutoComplete label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                       addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
            <AutoComplete label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                       addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          </div>

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
                .required('Username is required')
              })
            }>
          {
            (context) => (
                <>
                  <AutoComplete label="Username" name="n" value={value} suggestions={items} completeMethod={search}
                                onChange={(e) => setValue(e.value)}/>
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
