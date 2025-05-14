import {ToggleButton} from "@powell/components/ToggleButton";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ToggleButtonProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const ToggleButtonPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<ToggleButtonProps> = {
    component: "ToggleButton",
    description: "ToggleButton is used to select a boolean value using a button.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
      {field: 'disabled', value: false},
      {field: 'readonly', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <ToggleButton name="n"/>
      </Preview>
  )
}
