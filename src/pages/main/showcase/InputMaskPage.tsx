import {InputMask} from "@powell/components/InputMask";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputMaskProps} from "@powell/models";

export const InputMaskPage = () => {
  const previewProps: PreviewProps<InputMaskProps> = {
    component: "InputMask",
    description: "InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputMask name="n"/>
      </Preview>
  )
}
