import {ToggleButton} from "@powell/components/ToggleButton";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ToggleButtonProps} from "@powell/models";

export const ToggleButtonPage = () => {
  const previewProps: PreviewProps<ToggleButtonProps> = {
    component: "ToggleButton",
    description: "ToggleButton is used to select a boolean value using a button.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <ToggleButton name="n"/>
      </Preview>
  )
}
