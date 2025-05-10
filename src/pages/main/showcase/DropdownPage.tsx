import {Dropdown} from "@powell/components/Dropdown";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {DropdownProps} from "@powell/models";

export const DropdownPage = () => {
  const options = [
    {label: 'label1', value: 1},
    {label: 'label2', value: 2},
    {label: 'label3', value: 3},
    {label: 'label4', value: 4},
  ];

  const previewProps: PreviewProps<DropdownProps> = {
    component: "Dropdown",
    description: "Dropdown also known as Select, is used to choose an item from a collection of options.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <Dropdown options={options} name="n"/>
      </Preview>
  )
}
