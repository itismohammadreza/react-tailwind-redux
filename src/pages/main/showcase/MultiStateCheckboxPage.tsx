import {FormContainer} from "@powell/components/FormContainer";
import {MultiStateCheckbox} from "@powell/components/MultiStateCheckbox";
import {Button} from "@powell/components/Button";

export const MultiStateCheckboxPage = () => {
  const options = [
    { value: 'public', icon: 'pi pi-globe' },
    { value: 'protected', icon: 'pi pi-lock-open' },
    { value: 'private', icon: 'pi pi-lock' }
  ];
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <MultiStateCheckbox options={options} optionValue="value" label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
