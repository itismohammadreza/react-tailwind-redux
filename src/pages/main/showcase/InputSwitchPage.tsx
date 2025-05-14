import {InputSwitch} from "@powell/components/InputSwitch";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputSwitchProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const InputSwitchPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<InputSwitchProps> = {
    component: "InputSwitch",
    description: "InputSwitch is used to select a boolean value.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
      {field: 'disabled', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputSwitch name="n"/>
      </Preview>
  )
}
