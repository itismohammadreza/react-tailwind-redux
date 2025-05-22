import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {ConfirmPopupOptions} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";
import {Button} from "@powell/components/Button";
import {overlayService} from "@powell/api/overlayService";
import {useState} from "react";

export const ConfirmPopupPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<ConfirmPopupOptions> = {
    component: "ConfirmPopup",
    description: "ConfirmPopup is an easy to use and customizable Confirmation API using a popover.",
    withForm: false,
    options: [
      {field: 'message', value: 'Are you sure you want to proceed?'},
      {field: 'icon', value: 'pi pi-exclamation-triangle'},
      {field: 'acceptLabel', value: 'Yes'},
      {field: 'rejectLabel', value: 'No'},
      {field: 'acceptIcon', value: ''},
      {field: 'rejectIcon', value: ''},
      {field: 'acceptSeverity', selectOptions: 'severities', value: 'primary'},
      {field: 'acceptAppearance', selectOptions: 'appearances', value: 'basic'},
      {field: 'buttonSize', selectOptions: 'sizes', value: 'small'},
      {field: 'rejectSeverity', selectOptions: 'severities', value: 'danger'},
      {field: 'rejectAppearance', selectOptions: 'appearances', value: 'outlined'},
      {field: 'closeOnEscape', value: false},
      {field: 'defaultFocus', selectOptions: 'defaultFocusTypes', value: 'accept'},
      {field: 'buttonFull', value: false},
      {field: 'rtl', value: config.rtl},
    ],
    onOptionChange: (event) => {
      setOptions(prev => ({
        ...prev,
        [event.field]: event.value
      }))
    }
  }

  const defaults: ConfirmPopupOptions = previewProps.options.reduce((acc, curr) => ({
    ...acc,
    [curr.field]: curr.value
  }), {})

  const [options, setOptions] = useState(defaults);

  const showConfirmation = () => {
    overlayService.showConfirmPopup(options);
  };

  return (
      <Preview {...previewProps}>
        <Button label="Show Confirm Popup" onClick={showConfirmation}/>
      </Preview>
  );
};
