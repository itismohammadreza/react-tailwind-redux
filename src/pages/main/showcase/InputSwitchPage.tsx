import {FormContainer} from "@powell/components/FormContainer";
import {InputSwitch} from "@powell/components/InputSwitch";
import {Button} from "@powell/components/Button";

export const InputSwitchPage = () => {
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <InputSwitch label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
