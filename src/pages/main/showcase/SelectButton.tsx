import {SelectButton} from "@powell/components/SelectButton";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {SelectButtonProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const SelectButtonPage = () => {
  const [config] = usePowellConfig();

  const items = [
    {name: 'Option 1', value: 1},
    {name: 'Option 2', value: 2},
    {name: 'Option 3', value: 3}
  ];

  const previewProps: PreviewProps<SelectButtonProps> = {
    component: "SelectButton",
    description: "SelectButton is used to choose single or multiple items from a list using buttons.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
      {field: 'allowEmpty', value: true},
      {field: 'disabled', value: false},
      {field: 'multiple', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <SelectButton optionLabel="name" options={items} name="n"/>
      </Preview>
  )
}
