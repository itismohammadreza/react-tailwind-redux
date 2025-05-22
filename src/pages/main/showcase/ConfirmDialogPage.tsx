import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {usePowellConfig} from "@powell/hooks";
import {Button} from "@powell/components/Button";
import {overlayService} from "@powell/api/overlayService";
import {ConfirmDialogOptions} from "@powell/models";
import {useState} from "react";

export const ConfirmDialogPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<ConfirmDialogOptions> = {
    component: "ConfirmDialog",
    description: "ConfirmDialog is an easy to use and customizable Confirmation API using a dialog.",
    withForm: false,
    options: [
      {field: 'closable', value: true},
      {field: 'message', value: 'Are you sure you want to proceed?'},
      {field: 'header', value: 'Confirmation'},
      {field: 'acceptLabel', value: 'Yes'},
      {field: 'rejectLabel', value: 'No'},
      {field: 'icon', value: 'pi pi-exclamation-triangle'},
      {field: 'acceptSeverity', selectOptions: 'severities', value: 'primary'},
      {field: 'acceptAppearance', selectOptions: 'appearances', value: 'basic'},
      {field: 'buttonSize', selectOptions: 'sizes', value: 'small'},
      {field: 'rejectSeverity', selectOptions: 'severities', value: 'danger'},
      {field: 'rejectAppearance', selectOptions: 'appearances', value: 'outlined'},
      {field: 'closeOnEscape', value: false},
      {field: 'dismissableMask', value: false},
      {field: 'defaultFocus', selectOptions: 'defaultFocusTypes', value: 'accept'},
      {field: 'blockScroll', value: false},
      {field: 'buttonFull', value: false},
      {field: 'position', selectOptions: 'dialogPositions', value: 'center'},
      {field: 'rtl', value: config.rtl},
    ],
    onOptionChange: (event) => {
      setOptions(prev => ({
        ...prev,
        [event.field]: event.value
      }))
    }
  }

  const defaults: ConfirmDialogOptions = previewProps.options.reduce((acc, curr) => ({
    ...acc,
    [curr.field]: curr.value
  }), {})

  const [options, setOptions] = useState(defaults);

  const showConfirmation = () => {
    overlayService.showConfirmDialog(options);
  };

  return (
      <Preview {...previewProps}>
        <Button label="Show Confirm Dialog" onClick={showConfirmation}/>
      </Preview>
  );
};
