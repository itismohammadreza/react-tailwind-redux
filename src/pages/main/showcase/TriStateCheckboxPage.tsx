import {TriStateCheckbox} from "@powell/components/TriStateCheckbox";
import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {TriStateCheckboxProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const TriStateCheckboxPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<TriStateCheckboxProps> = {
    component: "TriStateCheckbox",
    description: "TriStateCheckbox is an extension to the Checkbox component with an additional state.",
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
    ]
  }

  return (
      <Preview {...previewProps}>
        <TriStateCheckbox name="n"/>
      </Preview>
  )
}
