import {Mention} from "@powell/components/Mention";
import {useState} from "react";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {MentionProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const MentionPage = () => {
  const [config] = usePowellConfig();

  const [suggestions, setSuggestions] = useState([]);

  const customersSource = [
    {id: '1', nickname: 'nickname1', name: 'name1', image: ''},
    {id: '2', nickname: 'nickname2', name: 'name2', image: ''},
    {id: '3', nickname: 'nickname3', name: 'name3', image: ''},
    {id: '4', nickname: 'nickname4', name: 'name4', image: ''},
    {id: '5', nickname: 'nickname5', name: 'name5', image: ''},
    {id: '6', nickname: 'nickname6', name: 'name6', image: ''},
  ]

  const onSearch = (event) => {
    setTimeout(() => {
      const query = event.query;
      let suggestions;

      if (!query.trim().length) {
        suggestions = [...customersSource];
      } else {
        suggestions = customersSource.filter((customer) => {
          return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
        });
      }
      setSuggestions(suggestions);
    }, 250);
  }

  const itemTemplate = (suggestion) => {
    const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.image;
    return (
        <div className="flex align-items-center">
          <img alt={suggestion.name} src={src} width="32"/>
          <span className="flex flex-column ml-2">
            {suggestion.name}
            <small style={{fontSize: '.75rem', color: 'var(--text-color-secondary)'}}>@{suggestion.nickname}</small>
          </span>
        </div>
    );
  }

  const previewProps: PreviewProps<MentionProps> = {
    component: "Mention",
    description: "Mention component is used to tag objects in a text.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'inputSize', value: '', selectOptions: 'sizes'},
      {field: 'autoResize', value: false},
      {field: 'delay', value: 0},
      {field: 'trigger', value: '@'},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Mention suggestions={suggestions}
                 onSearch={onSearch}
                 field="nickname"
                 rows={5}
                 cols={40}
                 itemTemplate={itemTemplate}
                 name="n"/>
      </Preview>
  )
}
