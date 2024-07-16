import { Button } from "@powell/components/Button";
import { useRef } from "react";
import { InputText } from "@powell/components/InputText";
import { FormContainer } from "@powell/components/FormContainer";

export const Home = () => {
  const state = useRef(false);

  const c = ({loadingCallback}) => {
    setTimeout(() => {
      state.current = !state.current;
      loadingCallback(state.current);
    }, 2000)
  }

  const onSuccess = (value) => {
    console.log(value)
  }

  return (
      <>
        <h2>Home Page</h2>
        <FormContainer onSuccess={onSuccess}>
          <InputText parseError={(e)=><h3>{e.message}</h3>} rules={{required: 'is required'}} name="name" hint="asdasd"/>
          <Button type="submit" label="submit"/>
        </FormContainer>
        <Button
            onClickAsync={c}
            async={true}
            size="small"
            label="prev"
            nextLabel="next"
            outlined
            nextOutlined={false}
            severity="danger"
            nextSeverity="success"/>
      </>
  )
}
