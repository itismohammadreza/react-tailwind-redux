import {InputNumber} from "@powell/components/InputNumber";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputNumberProps} from "@powell/models";

export const InputNumberPage = () => {
  const previewProps: PreviewProps<InputNumberProps> = {
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
        <InputNumber name="n"/>
      </Preview>
  )
}
