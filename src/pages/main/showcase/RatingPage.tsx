import {FormContainer} from "@powell/components/FormContainer";
import {Rating} from "@powell/components/Rating";
import {Button} from "@powell/components/Button";

export const RatingPage = () => {
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <Rating label="label" name="n"/>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
