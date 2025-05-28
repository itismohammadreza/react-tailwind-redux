import {Preview} from "@pages/main/showcase/components/Preview";
import {PreviewProps} from "@pages/main/showcase/models";
import {DialogOptions} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";
import {Button} from "@powell/components/Button";
import {overlayService} from "@powell/api";
import {useState} from "react";

export const DialogPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<DialogOptions> = {
    component: "Dialog",
    description: "Dialog is a container to display content in an overlay window",
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
      {field: 'rtl', value: config.rtl},
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

  const showDialog = () => {
    overlayService.showDialog(
        {
          style: {width: '50vw'},
          onHide: () => console.log('hided'),
          children: (close) => (
              <>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla
                  pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
                <Button onClick={close} label="Close"/>
              </>
          ),
          ...options,
        }
    );
  };

  return (
      <Preview {...previewProps}>
        <Button label="Show Dialog" onClick={showDialog}/>
      </Preview>
  );
};
