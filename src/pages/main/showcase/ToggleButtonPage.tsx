import {FormContainer} from "@powell/components/FormContainer";
import {ToggleButton} from "@powell/components/ToggleButton";
import {Button} from "@powell/components/Button";

export const ToggleButtonPage = () => {

  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <ToggleButton label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
