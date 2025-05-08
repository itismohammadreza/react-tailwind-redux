import {FormContainer} from "@powell/components/FormContainer";
import {RadioGroup} from "@powell/components/RadioGroup";
import {Button} from "@powell/components/Button";

export const RadioGroupPage = () => {
  const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <RadioGroup options={cities} optionValue="code" optionLabel="name" label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
