import {ListBox} from "@powell/components/ListBox";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ListBoxProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const ListBoxPage = () => {
  const [config] = usePowellConfig();

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
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.labelPosition},
      {field: 'disabled', value: false},
      {field: 'filter', value: false},
      {field: 'multiple', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <ListBox options={cities} optionLabel="name" name="n"/>
      </Preview>
  )
}
