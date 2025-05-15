import {InputPassword} from "@powell/components/InputPassword";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputPasswordProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const InputPasswordPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<InputPasswordProps> = {
    component: "Password",
    description: "Password displays strength indicator for password fields.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'inputSize', value: '', selectOptions: 'sizes'},
      {field: 'feedback', value: true},
      {field: 'toggleMask', value: true},
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputPassword name="n"/>
      </Preview>
  )
}
