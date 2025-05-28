import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {DialogFormOptions, DialogOptions} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";
import {Button} from "@powell/components/Button";
import {$Yup, overlayService} from "@powell/api";
import {useState} from "react";

export const DialogFormPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<DialogFormOptions> = {
    component: "DialogForm",
    description: "DialogForm is a container to display form in an overlay window.",
    withForm: false,
    options: [
      {field: 'header', value: 'Dialog'},
      {field: 'draggable', value: false},
      {field: 'resizable', value: false},
      {field: 'modal', value: true},
      {field: 'position', selectOptions: 'dialogPositions', value: 'center'},
      {field: 'blockScroll', value: false},
      {field: 'closeOnEscape', value: false},
      {field: 'dismissableMask', value: false},
      {field: 'closable', value: true},
      {field: 'showHeader', value: true},
      {field: 'maximizable', value: true},
      {field: 'acceptVisible', value: true},
      {field: 'rejectVisible', value: true},
      {field: 'rtl', value: config.rtl},
      {field: 'defaultFocus', selectOptions: 'defaultFocusTypes', value: 'accept'},
    ],
    onOptionChange: (event) => {
      setOptions(prev => ({
        ...prev,
        [event.field]: event.value
      }))
    }
  }

  const defaults: Partial<DialogOptions> = previewProps.options.reduce((acc, curr) => ({
    ...acc,
    [curr.field]: curr.value
  }), {})

  const [options, setOptions] = useState(defaults);

  const showDialogForm = async () => {
    overlayService.showDialogForm({
          config: [
            {
              component: 'input-text',
              key: 'username',
              label: 'username'
            }
          ],
          validationSchema: $Yup.object({
            username: $Yup.string().required('Field is required')
          }),
          onSubmit: (data) => {
            setTimeout(() => {
              data.finalizeSubmit(true);
            }, 2000)
          },
          dialogOptions: {
            style: {width: '50vw'},
            ...options
          }
        }
    );
  };

  return (
      <Preview {...previewProps}>
        <Button label="Show Dialog Form" onClick={showDialogForm}/>
      </Preview>
  );
};
