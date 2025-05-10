import {ColorPicker} from "@powell/components/ColorPicker";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ColorPickerProps} from "@powell/models";

export const ColorPickerPage = () => {
  const previewProps: PreviewProps<ColorPickerProps> = {
    component: "ColorPicker",
    description: "ColorPicker is an input component to select a color.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <ColorPicker name="n"/>
      </Preview>
  )
}
