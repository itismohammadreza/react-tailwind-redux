import {InputSwitch} from "@powell/components/InputSwitch";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputSwitchProps} from "@powell/models";

export const InputSwitchPage = () => {
  const previewProps: PreviewProps<InputSwitchProps> = {
    component: "InputSwitch",
    description: "InputSwitch is used to select a boolean value.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputSwitch name="n"/>
      </Preview>
  )
}
