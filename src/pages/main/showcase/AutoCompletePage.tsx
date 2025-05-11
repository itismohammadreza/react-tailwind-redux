import {Preview} from "@pages/main/showcase/components/Preview";
import {AutoComplete} from "@powell/components/AutoComplete";
import {useState} from "react";
import {$AutoCompleteCompleteEvent} from "@powell/api";
import {PreviewProps} from "@pages/main/showcase/models";
import {AutoCompleteProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const AutoCompletePage = () => {
  const [config] = usePowellConfig();

  const [items, setItems] = useState([]);

  const search = (event: $AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map(item => event.query + '-' + item));
  }

  const previewProps: PreviewProps<AutoCompleteProps> = {
    component: "AutoComplete",
    description: "AutoComplete is an input component that provides real-time suggestions while being typed",
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
      {field: 'multiple', value: true},
      {field: 'delay', value: 0},
      {field: 'dropdown', value: false},
    ],
  }

  return (
      <Preview {...previewProps}>
        <AutoComplete suggestions={items} completeMethod={search} name="n"/>
      </Preview>
  );
};
