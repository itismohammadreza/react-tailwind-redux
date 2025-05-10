import {InputPassword} from "@powell/components/InputPassword";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputPasswordProps} from "@powell/models";

export const InputPasswordPage = () => {
  const previewProps: PreviewProps<InputPasswordProps> = {
    component: "Password",
    description: "Password displays strength indicator for password fields.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputPassword name="n"/>
      </Preview>
  )
}
