import {Rating} from "@powell/components/Rating";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {RatingProps} from "@powell/models";

export const RatingPage = () => {
  const previewProps: PreviewProps<RatingProps> = {
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
        <Rating name="n"/>
      </Preview>
  )
}
