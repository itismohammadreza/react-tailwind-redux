import {SelectButton} from "@powell/components/SelectButton";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {SelectButtonProps} from "@powell/models";

export const SelectButtonPage = () => {
  const items = [
    {name: 'Option 1', value: 1},
    {name: 'Option 2', value: 2},
    {name: 'Option 3', value: 3}
  ];

  const previewProps: PreviewProps<SelectButtonProps> = {
    component: "SelectButton",
    description: "SelectButton is used to choose single or multiple items from a list using buttons.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <SelectButton optionLabel="name" options={items} name="n"/>
      </Preview>
  )
}
