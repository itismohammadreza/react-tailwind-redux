import {FormContainer} from "@powell/components/FormContainer";
import {CascadeSelect} from "@powell/components/CascadeSelect";
import {Button} from "@powell/components/Button";
import * as Yup from 'yup';
import {useRef, useState} from "react";
import {FormikContextType} from "formik";

export const CascadeSelectPage = () => {
  const [formValue, setFormValue] = useState<any>({n: ''})
  const [formContext, setFormContext] = useState<FormikContextType<any>>({})
  const formRef = useRef<HTMLFormElement>()
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const countries = [
    {
      name: 'Australia',
      code: 'AU',
      states: [
        {
          name: 'New South Wales',
          cities: [
            {cname: 'Sydney', code: 'A-SY'},
            {cname: 'Newcastle', code: 'A-NE'},
            {cname: 'Wollongong', code: 'A-WO'}
          ]
        },
        {
          name: 'Queensland',
          cities: [
            {cname: 'Brisbane', code: 'A-BR'},
            {cname: 'Townsville', code: 'A-TO'}
          ]
        },

      ]
    },
    {
      name: 'Canada',
      code: 'CA',
      states: [
        {
          name: 'Quebec',
          cities: [
            {cname: 'Montreal', code: 'C-MO'},
            {cname: 'Quebec City', code: 'C-QU'}
          ]
        },
        {
          name: 'Ontario',
          cities: [
            {cname: 'Ottawa', code: 'C-OT'},
            {cname: 'Toronto', code: 'C-TO'}
          ]
        },

      ]
    },
    {
      name: 'United States',
      code: 'US',
      states: [
        {
          name: 'California',
          cities: [
            {cname: 'Los Angeles', code: 'US-LA'},
            {cname: 'San Diego', code: 'US-SD'},
            {cname: 'San Francisco', code: 'US-SF'}
          ]
        },
        {
          name: 'Florida',
          cities: [
            {cname: 'Jacksonville', code: 'US-JA'},
            {cname: 'Miami', code: 'US-MI'},
            {cname: 'Tampa', code: 'US-TA'},
            {cname: 'Orlando', code: 'US-OR'}
          ]
        },
        {
          name: 'Texas',
          cities: [
            {cname: 'Austin', code: 'US-AU'},
            {cname: 'Dallas', code: 'US-DA'},
            {cname: 'Houston', code: 'US-HO'}
          ]
        }
      ]
    }
  ];

  const updateForm = () => {
    setFormValue({
      n: 'aaaa'
    })
  }

  return (
      <>
        <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
          <CascadeSelect options={countries}
                         optionLabel="cname"
                         optionGroupLabel="name"
                         optionGroupChildren={['states', 'cities']}
                         placeholder="Select a City"
                         label="label" labelPosition="float" name="n"/>

          <CascadeSelect label="label" labelPosition="fix-side" name="n"/>
          <CascadeSelect label="label" labelPosition="fix-top" name="n"/>

          <CascadeSelect name="n" iconPosition="right" icon="pi pi-search"/>
          <CascadeSelect name="n" iconPosition="left" icon="pi pi-search"/>

          <CascadeSelect addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
          <CascadeSelect addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

          <CascadeSelect label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
          <CascadeSelect label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>

          <CascadeSelect label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                        name="n"/>
          <CascadeSelect label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                        name="n"/>

          <CascadeSelect label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                        addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <CascadeSelect label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                        addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <CascadeSelect label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                        addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <CascadeSelect label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                        addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Button type="submit" label="submit"/>
        </FormContainer>
      </>
  )
}
