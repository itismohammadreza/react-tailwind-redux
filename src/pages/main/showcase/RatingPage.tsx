import {Rating} from "@powell/components/Rating";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {RatingProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const RatingPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<RatingProps> = {
    component: "Rating",
    description: "Rating component is a star based selection input.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.labelPosition},
      {field: 'cancel', value: true},
      {field: 'disabled', value: false},
      {field: 'readOnly', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Rating name="n"/>
      </Preview>
  )
}
