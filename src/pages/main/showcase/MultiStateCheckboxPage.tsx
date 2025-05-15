import {MultiStateCheckbox} from "@powell/components/MultiStateCheckbox";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {MultiStateCheckboxProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const MultiStateCheckboxPage = () => {
  const [config] = usePowellConfig();

  const options = [
    {value: 'public', icon: 'pi pi-globe'},
    {value: 'protected', icon: 'pi pi-lock-open'},
    {value: 'private', icon: 'pi pi-lock'}
  ];

  const previewProps: PreviewProps<MultiStateCheckboxProps> = {
    component: "MultiStateCheckbox",
    description: "MultiStateCheckbox is used to select a state from given options.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
      {field: 'disabled', value: false},
      {field: 'empty', value: true},
    ]
  }

  return (
      <Preview {...previewProps}>
        <MultiStateCheckbox options={options} optionValue="value" name="n"/>
      </Preview>
  )
}
