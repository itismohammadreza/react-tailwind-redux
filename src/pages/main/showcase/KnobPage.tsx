import {Knob} from "@powell/components/Knob";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {KnobProps} from "@powell/models";

export const KnobPage = () => {
  const previewProps: PreviewProps<KnobProps> = {
    component: "Knob",
    description: "Knob is a form component to define number inputs with a dial.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <Knob name="n"/>
      </Preview>
  )
}
