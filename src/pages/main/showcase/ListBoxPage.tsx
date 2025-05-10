import {ListBox} from "@powell/components/ListBox";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ListBoxProps} from "@powell/models";

export const ListBoxPage = () => {
  const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  const previewProps: PreviewProps<ListBoxProps> = {
    component: "ListBox",
    description: "ListBox is used to select one or more values from a list of items.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <ListBox options={cities} optionLabel="name" name="n"/>
      </Preview>
  )
}
