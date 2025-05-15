import {InputTextarea} from "@powell/components/InputTextarea";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputTextareaProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const InputTextareaPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<InputTextareaProps> = {
    component: "InputTextarea",
    description: "InputTextarea adds styling and autoResize functionality to standard textarea element.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'autoResize', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputTextarea name="n"/>
      </Preview>
  )
}
