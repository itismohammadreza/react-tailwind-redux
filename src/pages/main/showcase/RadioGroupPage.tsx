import {RadioGroup} from "@powell/components/RadioGroup";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {RadioGroupProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const RadioGroupPage = () => {
  const [config] = usePowellConfig();

  const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  const previewProps: PreviewProps<RadioGroupProps> = {
    component: "RadioGroup",
    description: "RadioGroup is an extension to standard radio button element with theming.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
      {field: 'disabled', value: false},
      {field: 'readOnly', value: false},
      {field: 'orientation', selectOptions: 'orientations', value: 'horizontal'},
    ]
  }

  return (
      <Preview {...previewProps}>
        <RadioGroup options={cities} optionValue="code" optionLabel="name" name="n"/>
      </Preview>
  )
}
