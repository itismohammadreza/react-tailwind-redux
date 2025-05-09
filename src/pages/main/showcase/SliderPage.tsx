import {Slider} from "@powell/components/Slider";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {SliderProps} from "@powell/models";

export const SliderPage = () => {
  const previewProps: PreviewProps<SliderProps> = {
    component: "",
    description: "",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <Slider name="n"/>
      </Preview>
  )
}
