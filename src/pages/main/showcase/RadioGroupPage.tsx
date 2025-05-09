import {RadioGroup} from "@powell/components/RadioGroup";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {RadioGroupProps} from "@powell/models";

export const RadioGroupPage = () => {
  const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  const previewProps: PreviewProps<RadioGroupProps> = {
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
        <RadioGroup options={cities} optionValue="code" optionLabel="name" name="n"/>
      </Preview>
  )
}
