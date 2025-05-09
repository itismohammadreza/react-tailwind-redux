import {MultiSelect} from "@powell/components/MultiSelect";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {MultiSelectProps} from "@powell/models";

export const MultiSelectPage = () => {
  const options = [
    {label: 'label1', value: 1},
    {label: 'label2', value: 2},
    {label: 'label3', value: 3},
    {label: 'label4', value: 4},
  ];

  const previewProps: PreviewProps<MultiSelectProps> = {
    component: "",
    description: "",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <MultiSelect options={options} name="n"/>
      </Preview>
  )
}
