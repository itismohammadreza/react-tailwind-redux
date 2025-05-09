import {Checkbox} from "@powell/components/Checkbox";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {CheckboxProps} from "@powell/models";

export const CheckboxPage = () => {
  const previewProps: PreviewProps<CheckboxProps> = {
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
        <Checkbox name="n"/>
      </Preview>
  )
}
