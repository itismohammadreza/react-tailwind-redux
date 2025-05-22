import {useEffect, useState} from "react";
import {$Divider} from "@powell/api";
import {InputText} from "@powell/components/InputText";
import {Checkbox} from "@powell/components/Checkbox";
import {Dropdown} from "@powell/components/Dropdown";
import {SafeAny} from "@powell/models";
import {PreviewOptionsProps} from "@pages/main/showcase/models";
import {dropdownOptionsMap} from "@pages/main/showcase/constants/dropdown-options-map";

export const PreviewOptions = (props: PreviewOptionsProps) => {
  const {options, onOptionChange} = props;
  const [values, setValues] = useState<Record<string, SafeAny>>({});

  useEffect(() => {
    const initialValues = options.reduce((acc, option) => {
      acc[option.field] = option.value;
      return acc;
    }, {});
    setValues(initialValues);
  }, [options]);

  const regularOptions = options.filter(opt => typeof opt.value !== 'boolean');
  const booleanOptions = options.filter(opt => typeof opt.value === 'boolean');

  const handleChange = (field: string, value: SafeAny) => {
    setValues(prev => ({...prev, [field]: value}));
    onOptionChange({field, value});
  };

  return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          regularOptions.map(option => (
              <div key={option.field} className="flex flex-col space-y-2">
                {option.selectOptions ? (
                    <Dropdown
                        showClear
                        label={option.field}
                        value={values[option.field]}
                        options={dropdownOptionsMap[option.selectOptions].map((v: string) => ({label: v, value: v}))}
                        onChange={e => handleChange(option.field, e.value)}
                        placeholder={option.field}
                    />
                ) : (
                    <InputText
                        label={option.field}
                        value={values[option.field] as string}
                        onChange={e => handleChange(option.field, e.target.value)}
                    />
                )}
              </div>
          ))
        }
        <$Divider className="md:col-span-2 lg:col-span-3"/>
        {
          booleanOptions.map(option => (
              <div key={option.field} className="flex flex-col space-y-2">
                <Checkbox
                    labelPosition="side"
                    label={option.field}
                    checked={values[option.field] as boolean}
                    onChange={e => handleChange(option.field, e.checked)}
                />
              </div>
          ))
        }
      </div>
  );
};
