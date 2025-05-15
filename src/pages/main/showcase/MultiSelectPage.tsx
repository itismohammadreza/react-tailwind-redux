import {MultiSelect} from "@powell/components/MultiSelect";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {MultiSelectProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const MultiSelectPage = () => {
  const [config] = usePowellConfig();

  const options = [
    {label: 'label1', value: 1},
    {label: 'label2', value: 2},
    {label: 'label3', value: 3},
    {label: 'label4', value: 4},
  ];

  const previewProps: PreviewProps<MultiSelectProps> = {
    component: "MultiSelect",
    description: "MultiSelect is used to select multiple items from a collection.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'inputSize', value: '', selectOptions: 'sizes'},
      {field: 'display', value: 'comma', selectOptions: 'displayTypes'},
      {field: 'filter', value: false},
      {field: 'fixedPlaceholder', value: false},
      {field: 'flex', value: false},
      {field: 'inline', value: false},
      {field: 'maxSelectedLabels', value: 4},
      {field: 'selectionLimit', value: 4},
      {field: 'showClear', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <MultiSelect options={options} name="n"/>
      </Preview>
  )
}
