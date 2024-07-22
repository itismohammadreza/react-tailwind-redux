import { Button } from "@powell/components/Button";
import { useRef } from "react";
import { InputText } from "@powell/components/InputText";
import { FormContainer } from "@powell/components/FormContainer";
import { useConfig } from "@hooks/useConfig";

export const Home = () => {
  const state = useRef(false);
  const [config, changeConfig] = useConfig()
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
        <input type="checkbox" defaultChecked={config.rtl} onChange={v => changeConfig({rtl: v.target.checked})}/>
        <h2>Home Page</h2>

        <Button
            onClickAsync={c}
            async={true}
            size="small"
            label="prev"
            nextLabel="next"
            appearance="text"
            nextAppearance="outlined"
            severity="danger"
            nextSeverity="success"/>
      </>
  )
}
