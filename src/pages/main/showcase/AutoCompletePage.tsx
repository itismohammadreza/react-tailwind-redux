import {Preview} from "@pages/main/showcase/components/Preview";
import {AutoComplete} from "@powell/components/AutoComplete";
import {useState} from "react";
import {$AutoCompleteCompleteEvent} from "@powell/api";
import {PreviewProps} from "@pages/main/showcase/models";
import {AutoCompleteProps} from "@powell/models";

export const AutoCompletePage = () => {
  const [items, setItems] = useState([]);

  const search = (event: $AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map(item => event.query + '-' + item));
  }

  const previewProps: PreviewProps<AutoCompleteProps> = {
    component: "AutoComplete",
    description: "AutoComplete is an input component that provides real-time suggestions while being typed",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
      {
        field: 'multiple',
        value: true,
      },
      {
        field: 'delay',
        value: 0,
      },
      {
        field: 'disabled',
        value: false,
      },
      {
        field: 'dropdown',
        value: false,
      },
      {
        field: 'variant',
        value: 'outlined',
        selectOptions: 'variants'
      },
      {
        field: 'labelPosition',
        value: 'float',
        selectOptions: 'labelPositions',
      }
    ],
  }

  return (
      <Preview {...previewProps}>
        <AutoComplete suggestions={items} completeMethod={search} name="n"/>
      </Preview>
  );
};
