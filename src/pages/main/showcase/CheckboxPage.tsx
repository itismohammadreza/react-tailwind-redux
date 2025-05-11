import {Checkbox} from "@powell/components/Checkbox";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {CheckboxProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const CheckboxPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<CheckboxProps> = {
    component: "Checkbox",
    description: "Checkbox is an extension to standard checkbox element with theming.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.labelPosition},
      {field: 'disabled', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Checkbox name="n"/>
      </Preview>
  )
}
