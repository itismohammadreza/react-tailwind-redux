import {ColorPicker} from "@powell/components/ColorPicker";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ColorPickerProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const ColorPickerPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<ColorPickerProps> = {
    component: "ColorPicker",
    description: "ColorPicker is an input component to select a color.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
      {field: 'inline', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <ColorPicker name="n"/>
      </Preview>
  )
}
