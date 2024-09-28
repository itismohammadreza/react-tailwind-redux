import {FormContainer} from "@powell/components/FormContainer";
import {TriStateCheckbox} from "@powell/components/TriStateCheckbox";
import {Button} from "@powell/components/Button";

export const TriStateCheckboxPage = () => {
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{n:null}} onSubmit={v => console.log(v)}>
        <TriStateCheckbox label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
