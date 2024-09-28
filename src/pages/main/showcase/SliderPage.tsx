import {FormContainer} from "@powell/components/FormContainer";
import {Slider} from "@powell/components/Slider";
import {Button} from "@powell/components/Button";

export const SliderPage = () => {
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <Slider label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
