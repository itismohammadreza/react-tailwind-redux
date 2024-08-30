import {FormContainer} from "@powell/components/FormContainer";
import {Dropdown} from "@powell/components/Dropdown";
import {Button} from "@powell/components/Button";

export const DropdownPage = () => {
  const options = [
    {label: 'label1', value: 1},
    {label: 'label2', value: 2},
    {label: 'label3', value: 3},
    {label: 'label4', value: 4},
  ]
  return (
      <FormContainer initialValues={{}} onSubmit={v => console.log(v)}>
        <div className="flex flex-col gap-2 p-10">
          <Dropdown filter options={options} label="label" labelPosition="float" name="n"/>
          <Dropdown options={options} label="label" labelPosition="fix-side" name="n"/>
          <Dropdown options={options} label="label" labelPosition="fix-top" name="n"/>

          <Dropdown options={options} name="n" iconPosition="right" icon="pi pi-search"/>
          <Dropdown options={options} name="n" iconPosition="left" icon="pi pi-search"/>

          <Dropdown options={options} addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
          <Dropdown options={options} addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

          <Dropdown options={options} label="label" labelPosition="float" icon="pi pi-search" iconPosition="right"
                    name="n"/>
          <Dropdown options={options} label="label" labelPosition="float" icon="pi pi-search" iconPosition="left"
                    name="n"/>

          <Dropdown options={options} label="label" labelPosition="float"
                    addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                    name="n"/>
          <Dropdown options={options} label="label" labelPosition="float"
                    addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                    name="n"/>

          <Dropdown options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="right"
                    addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Dropdown options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="right"
                    addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Dropdown options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="left"
                    addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
          <Dropdown options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="left"
                    addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
        </div>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
