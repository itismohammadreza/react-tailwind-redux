import {Chips} from "@powell/components/Chips";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {ChipsProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const ChipsPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<ChipsProps> = {
    component: "Chips",
    description: "Chips is used to enter multiple values on an input field.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'addon', selectOptions: 'addon', value: 'none'},
      {field: 'inputSize', value: 'none', selectOptions: 'sizes'},
      {field: 'allowDuplicate', value: true},
      {field: 'disabled', value: false},
      {field: 'max', value: 10},
      {field: 'separator', value: ','},
      {field: 'removable', value: true},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Chips name="n"/>
      </Preview>
  )
}
