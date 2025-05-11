import {InputMask} from "@powell/components/InputMask";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputMaskProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const InputMaskPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<InputMaskProps> = {
    component: "InputMask",
    description: "InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'inputSize', value: '', selectOptions: 'sizes'},
      {field: 'autoClear', value: true},
      {field: 'disabled', value: false},
      {field: 'mask', value: '9999-999'},
      {field: 'slotChar', value: '_'},
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputMask name="n"/>
      </Preview>
  )
}
