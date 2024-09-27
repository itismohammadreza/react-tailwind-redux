import {FormContainer} from "@powell/components/FormContainer";
import {Knob} from "@powell/components/Knob";
import {Button} from "@powell/components/Button";

export const KnobPage = () => {
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <Knob label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
