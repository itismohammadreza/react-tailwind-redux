import {Knob} from "@powell/components/Knob";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {KnobProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const KnobPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<KnobProps> = {
    component: "Knob",
    description: "Knob is a form component to define number inputs with a dial.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
      {field: 'disabled', value: false},
      {field: 'max', value: 100},
      {field: 'min', value: 0},
      {field: 'showValue', value: false},
      {field: 'step', value: 1},
      {field: 'strokeWidth', value: 14},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Knob name="n"/>
      </Preview>
  )
}
