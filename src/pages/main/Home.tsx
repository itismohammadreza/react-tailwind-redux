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
        <FormContainer onSuccess={onSuccess}>
          <div className="flex flex-col gap-2 p-10">
            <InputText label="label" labelPosition="float" name="n"/>
            <InputText label="label" labelPosition="fix-side" name="n"/>
            <InputText label="label" labelPosition="fix-top" name="n"/>

            <InputText name="n" iconPosition="right" icon="pi pi-search"/>
            <InputText name="n" iconPosition="left" icon="pi pi-search"/>

            <InputText addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
            <InputText addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

            <InputText label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
            <InputText label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>

            <InputText label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                       name="n"/>
            <InputText label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                       name="n"/>

            <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                       addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
            <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                       addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
            <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                       addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
            <InputText label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                       addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          </div>

          <Button type="submit" label="submit"/>
        </FormContainer>
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
