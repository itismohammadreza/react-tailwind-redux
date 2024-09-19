import {FormContainer} from "@powell/components/FormContainer";
import {Checkbox} from "@powell/components/Checkbox";
import {Button} from "@powell/components/Button";

export const CheckboxPage = () => {
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <Checkbox label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
