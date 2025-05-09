import {InputOtp} from "@powell/components/InputOtp";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputOtpProps} from "@powell/models";

export const InputOtpPage = () => {
  const previewProps: PreviewProps<InputOtpProps> = {
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
        <InputOtp name="n"/>
      </Preview>
  )
}
