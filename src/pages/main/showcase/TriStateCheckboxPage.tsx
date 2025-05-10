import {TriStateCheckbox} from "@powell/components/TriStateCheckbox";
import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {TriStateCheckboxProps} from "@powell/models";

export const TriStateCheckboxPage = () => {
  const previewProps: PreviewProps<TriStateCheckboxProps> = {
    component: "TriStateCheckbox",
    description: "TriStateCheckbox is an extension to the Checkbox component with an additional state.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <TriStateCheckbox name="n"/>
      </Preview>
  )
}
