import {FormContainer} from "@powell/components/FormContainer";
import {Mention} from "@powell/components/Mention";
import {Button} from "@powell/components/Button";
import {useRef, useState} from "react";
import {$FormikContextType, $Yup} from "@powell/api";

export const MentionPage = () => {
  const [formValue, setFormValue] = useState<any>({n: ''})
  const [formContext, setFormContext] = useState<$FormikContextType<any>>({})
  const formRef = useRef<HTMLFormElement>()
  const customersSource = [
    {id: '1', nickname: 'nickname1', name: 'name1', image: ''},
    {id: '2', nickname: 'nickname2', name: 'name2', image: ''},
    {id: '3', nickname: 'nickname3', name: 'name3', image: ''},
    {id: '4', nickname: 'nickname4', name: 'name4', image: ''},
    {id: '5', nickname: 'nickname5', name: 'name5', image: ''},
    {id: '6', nickname: 'nickname6', name: 'name6', image: ''},
  ]
  const [value, setValue] = useState('');
  const [customers, setCustomers] = useState(customersSource);
  const [suggestions, setSuggestions] = useState([]);

  const onSearch = (event) => {
    //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
    setTimeout(() => {
      const query = event.query;
      let suggestions;

      if (!query.trim().length) {
        suggestions = [...customers];
      } else {
        suggestions = customers.filter((customer) => {
          return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
        });
      }

      setSuggestions(suggestions);
    }, 250);
  }

  const itemTemplate = (suggestion) => {
    const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.image;

    return (
        <div className="flex align-items-center">
          <img alt={suggestion.name} src={src} width="32"/>
          <span className="flex flex-column ml-2">
                    {suggestion.name}
            <small style={{fontSize: '.75rem', color: 'var(--text-color-secondary)'}}>@{suggestion.nickname}</small>
                </span>
        </div>
    );
  }


  const updateForm = () => {
    setFormValue({
      n: 'aaaa'
    })
  }

  return (
      <>
        <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
          <Mention inputId="newpost" value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions}
                   onSearch={onSearch}
                   field="nickname" rows={5} cols={40} itemTemplate={itemTemplate} label="label" labelPosition="float"
                   name="n"/>

          <Mention label="label" labelPosition="fix-side" name="n"/>
          <Mention label="label" labelPosition="fix-top" name="n"/>

          <Mention name="n" iconPosition="right" icon="pi pi-search"/>
          <Mention name="n" iconPosition="left" icon="pi pi-search"/>

          <Mention addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
          <Mention addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

          <Mention label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
          <Mention label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>

          <Mention label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                   name="n"/>
          <Mention label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                   name="n"/>

          <Mention label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                   addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Mention label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                   addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Mention label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                   addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Mention label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
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
                  <Mention label="Username" name="n"/>
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
