import {FormContainer} from "@powell/components/FormContainer";
import {InputTextarea} from "@powell/components/InputTextarea";
import {Button} from "@powell/components/Button";

export const InputTextareaPage = () => {
  return (
      <FormContainer initialValues={{}} onSubmit={v => console.log(v)}>
        <div className="flex flex-col gap-2 p-10">
          <InputTextarea label="label" labelPosition="float" name="n"/>
          <InputTextarea label="label" labelPosition="fix-side" name="n"/>
          <InputTextarea label="label" labelPosition="fix-top" name="n"/>

          <InputTextarea name="n" iconPosition="right" icon="pi pi-search"/>
          <InputTextarea name="n" iconPosition="left" icon="pi pi-search"/>

          <InputTextarea addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
          <InputTextarea addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

          <InputTextarea label="label" labelPosition="float" icon="pi pi-search" iconPosition="right" name="n"/>
          <InputTextarea label="label" labelPosition="float" icon="pi pi-search" iconPosition="left" name="n"/>

          <InputTextarea label="label" labelPosition="float" addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                         name="n"/>
          <InputTextarea label="label" labelPosition="float" addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                         name="n"/>

          <InputTextarea label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                         addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <InputTextarea label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="right"
                         addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <InputTextarea label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                         addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <InputTextarea label="label" labelPosition="float" name="n" icon="pi pi-search" iconPosition="left"
                         addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
        </div>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
