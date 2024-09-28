import {FormContainer} from "@powell/components/FormContainer";
import {SelectButton} from "@powell/components/SelectButton";
import {Button} from "@powell/components/Button";

export const SelectButtonPage = () => {
  const items = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
  ];

  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <SelectButton optionLabel="name" options={items} label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
