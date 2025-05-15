import {CascadeSelect} from "@powell/components/CascadeSelect";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {CascadeSelectProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const CascadeSelectPage = () => {
  const [config] = usePowellConfig();

  const countries = [
    {
      name: 'Australia',
      code: 'AU',
      states: [
        {
          name: 'New South Wales',
          cities: [
            {cname: 'Sydney', code: 'A-SY'},
            {cname: 'Newcastle', code: 'A-NE'},
            {cname: 'Wollongong', code: 'A-WO'}
          ]
        },
        {
          name: 'Queensland',
          cities: [
            {cname: 'Brisbane', code: 'A-BR'},
            {cname: 'Townsville', code: 'A-TO'}
          ]
        },

      ]
    },
    {
      name: 'Canada',
      code: 'CA',
      states: [
        {
          name: 'Quebec',
          cities: [
            {cname: 'Montreal', code: 'C-MO'},
            {cname: 'Quebec City', code: 'C-QU'}
          ]
        },
        {
          name: 'Ontario',
          cities: [
            {cname: 'Ottawa', code: 'C-OT'},
            {cname: 'Toronto', code: 'C-TO'}
          ]
        },

      ]
    },
    {
      name: 'United States',
      code: 'US',
      states: [
        {
          name: 'California',
          cities: [
            {cname: 'Los Angeles', code: 'US-LA'},
            {cname: 'San Diego', code: 'US-SD'},
            {cname: 'San Francisco', code: 'US-SF'}
          ]
        },
        {
          name: 'Florida',
          cities: [
            {cname: 'Jacksonville', code: 'US-JA'},
            {cname: 'Miami', code: 'US-MI'},
            {cname: 'Tampa', code: 'US-TA'},
            {cname: 'Orlando', code: 'US-OR'}
          ]
        },
        {
          name: 'Texas',
          cities: [
            {cname: 'Austin', code: 'US-AU'},
            {cname: 'Dallas', code: 'US-DA'},
            {cname: 'Houston', code: 'US-HO'}
          ]
        }
      ]
    }
  ];

  const previewProps: PreviewProps<CascadeSelectProps> = {
    component: "CascadeSelect",
    description: "CascadeSelect is a form component to select a value from a nested structure of options.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'inputSize', value: '', selectOptions: 'sizes'},
    ]
  }

  return (
      <Preview {...previewProps}>
        <CascadeSelect
            options={countries}
            optionLabel="cname"
            optionGroupLabel="name"
            optionGroupChildren={['states', 'cities']}
            style={{ width: '14rem' }}
            name="n"/>
      </Preview>
  )
}
