import {FormContainer} from "@powell/components/FormContainer";
import {AutoComplete} from "@powell/components/AutoComplete";
import {Button} from "@powell/components/Button";
import {useRef, useState} from "react";
import {$FormikContextType, $Yup} from "@powell/api";
import {Preview} from "@pages/main/showcase/components/Preview.tsx";

export const AutoCompletePage = () => {
  const [formValue, setFormValue] = useState<any>({n: ''})
  const [formContext, setFormContext] = useState<$FormikContextType<any>>({})
  const formRef = useRef<HTMLFormElement>()
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map(item => event.query + '-' + item));
  }

  const updateForm = () => {
    setFormValue({
      n: 'aaaa'
    })
  }

  return (
      <>
        <Preview
            previewOptions={[
              {field: 'label', value: 'this is label'},
              {field: 'multiple', value: false},
            ]}
            component={"AutoComplete"}
            description={'Description'}>
          <AutoComplete label="label" labelPosition="float" name="n"/>
        </Preview>

        <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
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
          <Button type="submit" label="submit"/>
        </FormContainer>
      </>
  )
}
