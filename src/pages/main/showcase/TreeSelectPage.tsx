import {FormContainer} from "@powell/components/FormContainer";
import {TreeSelect} from "@powell/components/TreeSelect";
import {Button} from "@powell/components/Button";

export const TreeSelectPage = () => {
  const options = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            {key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document'},
            {key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document'}
          ]
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [{key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month'}]
        }
      ]
    },
    {
      key: '1',
      label: 'Events',
      data: 'Events Folder',
      icon: 'pi pi-fw pi-calendar',
      children: [
        {key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting'},
        {key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch'},
        {key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review'}
      ]
    },
    {
      key: '2',
      label: 'Movies',
      data: 'Movies Folder',
      icon: 'pi pi-fw pi-star-fill',
      children: [
        {
          key: '2-0',
          icon: 'pi pi-fw pi-star-fill',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            {key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie'},
            {key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie'}
          ]
        },
        {
          key: '2-1',
          label: 'Robert De Niro',
          icon: 'pi pi-fw pi-star-fill',
          data: 'De Niro Movies',
          children: [
            {key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie'},
            {key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie'}
          ]
        }
      ]
    }
  ];
  return (
      <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>
        <TreeSelect filter options={options} label="label" labelPosition="float" name="n"/>
        <TreeSelect options={options} label="label" labelPosition="fix-side" name="n"/>
        <TreeSelect options={options} label="label" labelPosition="fix-top" name="n"/>

        <TreeSelect options={options} name="n" iconPosition="right" icon="pi pi-search"/>
        <TreeSelect options={options} name="n" iconPosition="left" icon="pi pi-search"/>

        <TreeSelect options={options} addon={{after: {type: 'button', icon: 'pi pi-search'}}} name="n"/>
        <TreeSelect options={options} addon={{before: {type: 'button', icon: 'pi pi-search'}}} name="n"/>

        <TreeSelect options={options} label="label" labelPosition="float" icon="pi pi-search" iconPosition="right"
                    name="n"/>
        <TreeSelect options={options} label="label" labelPosition="float" icon="pi pi-search" iconPosition="left"
                    name="n"/>

        <TreeSelect options={options} label="label" labelPosition="float"
                    addon={{before: {type: 'icon', icon: 'pi pi-search'}}}
                    name="n"/>
        <TreeSelect options={options} label="label" labelPosition="float"
                    addon={{after: {type: 'icon', icon: 'pi pi-search'}}}
                    name="n"/>

        <TreeSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="right"
                    addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
        <TreeSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="right"
                    addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
        <TreeSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="left"
                    addon={{before: {type: 'icon', icon: 'pi pi-search'}}}/>
        <TreeSelect options={options} label="label" labelPosition="float" name="n" icon="pi pi-search"
                    iconPosition="left"
                    addon={{after: {type: 'icon', icon: 'pi pi-search'}}}/>
        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
