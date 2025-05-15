import {Slider} from "@powell/components/Slider";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {SliderProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const SliderPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<SliderProps> = {
    component: "Slider",
    description: "Slider is a component to provide input with a drag handle.",
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
      {field: 'orientation', value: 'horizontal', selectOptions: 'orientations'},
      {field: 'range', value: false},
      {field: 'style', value: 1},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Slider name="n"/>
      </Preview>
  )
}
