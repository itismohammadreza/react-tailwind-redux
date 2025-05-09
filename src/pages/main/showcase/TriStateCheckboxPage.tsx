import {TriStateCheckbox} from "@powell/components/TriStateCheckbox";
import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {TriStateCheckboxProps} from "@powell/models";

export const TriStateCheckboxPage = () => {
  const previewProps: PreviewProps<TriStateCheckboxProps> = {
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
        <TriStateCheckbox name="n"/>
      </Preview>
  )
}
