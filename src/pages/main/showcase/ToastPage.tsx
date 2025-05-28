import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {ToastOptions} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";
import {Button} from "@powell/components/Button";
import {overlayService} from "@powell/api";
import {useState} from "react";

export const ToastPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<ToastOptions> = {
    component: "Toast",
    description: "Toast is used to display messages in an overlay.",
    withForm: false,
    options: [
      {field: 'life', value: 3000},
      {field: 'sticky', value: false},
      {field: 'rtl', value: config.rtl},
      {field: 'summary', value: 'some summary'},
      {field: 'closable', value: false},
      {field: 'severity', selectOptions: 'toastSeverities', value: 'info'},
      {field: 'icon', value: 'pi pi-info'},
      {field: 'detail', value: 'some detail'},
      {field: 'position', selectOptions: 'toastPositions', value: 'top-right'},
    ],
    onOptionChange: (event) => {
      setOptions(prev => ({
        ...prev,
        [event.field]: event.value
      }))
    }
  }

  const defaults: Partial<ToastOptions> = previewProps.options.reduce((acc, curr) => ({
    ...acc,
    [curr.field]: curr.value
  }), {})

  const [options, setOptions] = useState(defaults);

  const showToast = () => {
    overlayService.showToast(options);
  };


  return (
      <Preview {...previewProps}>
        <Button label="Show Toast" onClick={showToast}/>
      </Preview>
  );
};
