import {MultiStateCheckbox} from "@powell/components/MultiStateCheckbox";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {MultiStateCheckboxProps} from "@powell/models";

export const MultiStateCheckboxPage = () => {
  const options = [
    {value: 'public', icon: 'pi pi-globe'},
    {value: 'protected', icon: 'pi pi-lock-open'},
    {value: 'private', icon: 'pi pi-lock'}
  ];

  const previewProps: PreviewProps<MultiStateCheckboxProps> = {
    component: "MultiStateCheckbox",
    description: "MultiStateCheckbox is used to select a state from given options.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <MultiStateCheckbox options={options} optionValue="value" name="n"/>
      </Preview>
  )
}
