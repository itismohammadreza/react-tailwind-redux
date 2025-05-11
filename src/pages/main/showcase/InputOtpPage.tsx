import {InputOtp} from "@powell/components/InputOtp";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputOtpProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const InputOtpPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<InputOtpProps> = {
    component: "InputOtp",
    description: "InputOtp groups a collection of contents in tabs.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.labelPosition},
      {field: 'disabled', value: false},
      {field: 'integerOnly', value: false},
      {field: 'length', value: 4},
      {field: 'mask', value: false},
      {field: 'readonly', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputOtp name="n"/>
      </Preview>
  )
}
