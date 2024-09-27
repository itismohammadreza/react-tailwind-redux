import {FormContainer} from "@powell/components/FormContainer";
import {MultiSelect} from "@powell/components/MultiSelect";
import {Button} from "@powell/components/Button";

export const MultiSelectPage = () => {
  const options = [
    {label: 'label1', value: 1},
    {label: 'label2', value: 2},
    {label: 'label3', value: 3},
    {label: 'label4', value: 4},
  ]
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <MultiSelect filter options={options} label="label" labelPosition="float" name="n"/>
        <MultiSelect options={options} label="label" labelPosition="fix-side" name="n"/>
        <MultiSelect options={options} label="label" labelPosition="fix-top" name="n"/>

        <MultiSelect options={options} name="n" iconPosition="right" icon="pi pi-search"/>
        <MultiSelect options={options} name="n" iconPosition="left" icon="pi pi-search"/>

        <MultiSelect options={options} addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
        <MultiSelect options={options} addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

        <MultiSelect options={options} label="label" labelPosition="float" icon="pi pi-search" iconPosition="right"
                  name="n"/>
        <MultiSelect options={options} label="label" labelPosition="float" icon="pi pi-search" iconPosition="left"
                  name="n"/>

        <MultiSelect options={options} label="label" labelPosition="float"
                  addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                  name="n"/>
        <MultiSelect options={options} label="label" labelPosition="float"
                  addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                  name="n"/>

        <MultiSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                  iconPosition="right"
                  addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
        <MultiSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                  iconPosition="right"
                  addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
        <MultiSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                  iconPosition="left"
                  addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
        <MultiSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                  iconPosition="left"
                  addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
