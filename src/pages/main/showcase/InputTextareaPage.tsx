import {InputTextarea} from "@powell/components/InputTextarea";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputTextareaProps} from "@powell/models";

export const InputTextareaPage = () => {
  const previewProps: PreviewProps<InputTextareaProps> = {
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
        <InputTextarea name="n"/>
      </Preview>
  )
}
