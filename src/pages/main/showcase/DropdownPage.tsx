import {Dropdown} from "@powell/components/Dropdown";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {DropdownProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const DropdownPage = () => {
  const [config] = usePowellConfig();

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
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'addon', selectOptions: 'addon', value: 'none'},
      {field: 'inputSize', value: 'none', selectOptions: 'sizes'},
      {field: 'checkmark', value: false},
      {field: 'disabled', value: false},
      {field: 'editable', value: false},
      {field: 'filter', value: false},
      {field: 'placeholder', value: ''},
      {field: 'showClear', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Dropdown options={options} name="n"/>
      </Preview>
  )
}
