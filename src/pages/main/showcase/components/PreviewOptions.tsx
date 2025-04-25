import {useEffect, useState} from "react";
import {$Divider} from "@powell/api";
import {InputText} from "@powell/components/InputText";
import {Checkbox} from "@powell/components/Checkbox";
import {Dropdown} from "@powell/components/Dropdown";

const dropdownOptionsMap = {
  positions: ['top', 'bottom', 'left', 'right'],
  displayTypes: ['comma', 'chip'],
  appearances: ['basic', 'text', 'outlined', 'link'],
  buttonLayouts: ['stacked', 'horizontal', 'vertical'],
  keyFilters: [/.*/g, 'pint', 'int', 'pnum', 'num', 'hex', 'email', 'alpha', 'alphanum'],
  currencies: ['USD', 'EUR', 'IRR'],
  currencyDisplays: ['symbol', 'code', 'name'],
  labelPositions: ['ifta', 'float-in', 'float-on', 'float-over', 'side', 'top'],
  orientations: ['horizontal', 'vertical'],
  dropdownModes: ['blank', 'current'],
  severities: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'help', 'contrast'],
  hourFormats: ['12', '24'],
  views: ['date', 'month', 'year'],
  statuses: ['none', 'success', 'info', 'warning', 'error', '403', '404', '500'],
  imageTypes: ['none', 'box1', 'box2', 'magnifier'],
  iconDisplayTypes: ['input', 'button'],
  additions: ['none', 'iconStart', 'iconEnd', 'iconBoth', 'addonStart', 'addonEnd', 'addonBoth'],
  sizes: ['none', 'small', 'large'],
  colorFormats: ['hex', 'rgb', 'hsb'],
  modes: ['basic', 'advanced'],
  selectionModes: ['none', 'single', 'multiple', 'checkbox'],
  datepickerSelectionModes: ['single', 'multiple', 'range'],
  numberModes: ['decimal', 'currency'],
  fixLabelPositions: ['side', 'top'],
  defaultFocusTypes: ['none', 'accept', 'reject', 'close'],
  toastPositions: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center', 'center'],
  toastSeverities: ['secondary', 'success', 'info', 'warn', 'error', 'contrast'],
  dialogPositions: ['top', 'bottom', 'left', 'right', 'topleft', 'topright', 'bottomleft', 'bottomright', 'center'],
  pinchLimitZoomLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 'original image size'],
  pinchOverflows: ['hidden', 'visible'],
  pinchDisableZoomControls: ['disable', 'never', 'auto'],
  pinchListeners: ['auto', 'mouse and touch'],
  variants: ['outlined', 'filled']
};

interface PreviewOption {
  field: string;
  value: string | number | boolean;
  options?: keyof typeof dropdownOptionsMap;
  label?: string;
}

interface PreviewOptionsProps {
  options: PreviewOption[];
  onOptionChange: (option: { field: string; value: string | number | boolean }) => void;
}

export const PreviewOptions = ({ options, onOptionChange }: PreviewOptionsProps) => {
  const [values, setValues] = useState<Record<string, string | number | boolean>>({});

  useEffect(() => {
    const initialValues = options.reduce<Record<string, string | number | boolean>>((acc, option) => {
      acc[option.field] = option.value;
      return acc;
    }, {});
    setValues(initialValues);
  }, [options]);

  const handleChange = (field: string, value: string | number | boolean) => {
    setValues(prev => ({ ...prev, [field]: value }));
    onOptionChange?.({ field, value });
  };

  return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          options.map(option => (
              <div key={option.field} className="flex flex-col space-y-2">
                {option.options ? (
                    <Dropdown
                        label={option.field}
                        value={values[option.field]}
                        options={dropdownOptionsMap[option.options].map(v => ({label: v, value: v}))}
                        onChange={e => handleChange(option.field, e.value)}
                        placeholder={option.field}
                    />
                ) : typeof option.value === 'string' || typeof option.value === 'number' ? (
                    <InputText
                        label={option.field}
                        value={values[option.field]}
                        onChange={e => handleChange(option.field, e.target.value)}
                    />
                ) : (
                    <Checkbox
                        label={option.field}
                        checked={values[option.field]}
                        onChange={e => handleChange(option.field, e.checked)}
                    />
                )}
              </div>
          ))
        }
        <$Divider className="md:col-span-2 lg:col-span-3"/>
      </div>
  );
};
