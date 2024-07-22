import { FormContainer } from "@powell/components/FormContainer";
import { InputText } from "@powell/components/InputText";
import { Button } from "@powell/components/Button";
import { useConfig } from "@hooks/useConfig";

export const InputPage = () => {
  const [config, changeConfig] = useConfig();

  return (
      <FormContainer>
        <input type="checkbox" defaultChecked={config.rtl} onChange={v => changeConfig({rtl: v.target.checked})}/>
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
  )
}
