import {Chips} from "@powell/components/Chips";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ChipsProps} from "@powell/models";

export const ChipsPage = () => {
  const previewProps: PreviewProps<ChipsProps> = {
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
        <Chips name="n"/>
      </Preview>
  )
}
