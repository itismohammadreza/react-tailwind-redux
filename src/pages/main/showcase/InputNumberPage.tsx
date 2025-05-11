import {InputNumber} from "@powell/components/InputNumber";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputNumberProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const InputNumberPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<InputNumberProps> = {
    component: "InputNumber",
    description: "InputNumber is an input component to provide numerical input.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'inputSize', value: '', selectOptions: 'sizes'},
      {field: 'disabled', value: false},
      {field: 'format', value: true},
      {field: 'max', value: 500000},
      {field: 'min', value: 0},
      {field: 'placeholder', value: ''},
      {field: 'readOnly', value: false},
      {field: 'showButtons', value: false},
      {field: 'step', value: 1},
      {field: 'suffix', value: ''},
      {field: 'useGrouping', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputNumber name="n"/>
      </Preview>
  )
}
