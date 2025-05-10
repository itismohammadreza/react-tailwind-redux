import {Mention} from "@powell/components/Mention";
import {useState} from "react";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {MentionProps} from "@powell/models";

export const MentionPage = () => {
  const customersSource = [
    {id: '1', nickname: 'nickname1', name: 'name1', image: ''},
    {id: '2', nickname: 'nickname2', name: 'name2', image: ''},
    {id: '3', nickname: 'nickname3', name: 'name3', image: ''},
    {id: '4', nickname: 'nickname4', name: 'name4', image: ''},
    {id: '5', nickname: 'nickname5', name: 'name5', image: ''},
    {id: '6', nickname: 'nickname6', name: 'name6', image: ''},
  ]
  const [customers, setCustomers] = useState(customersSource);
  const [suggestions, setSuggestions] = useState([]);

  const onSearch = (event) => {
    setTimeout(() => {
      const query = event.query;
      let suggestions;

      if (!query.trim().length) {
        suggestions = [...customers];
      } else {
        suggestions = customers.filter((customer) => {
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
      {
        field: 'label',
        value: 'Label',
      },
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
