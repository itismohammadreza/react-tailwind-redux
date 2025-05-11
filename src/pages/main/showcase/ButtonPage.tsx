import {Button} from "@powell/components/Button";
import {useRef} from "react";
import {PreviewProps} from "@pages/main/showcase/models";
import {ButtonProps} from "@powell/models";
import {Preview} from "@pages/main/showcase/components/Preview";

export const ButtonPage = () => {
  const state = useRef(false);

  const previewProps: PreviewProps<ButtonProps> = {
    component: "Button",
    description: "Button is an extension to standard input element with icons and theming.",
    withForm: false,
    options: [
      {field: 'label', value: 'Label'},
      {field: 'badge', value: 0},
      {field: 'disabled', value: false},
      {field: 'async', value: false},
      {field: 'raised', value: false},
      {field: 'iconPos', value: 'left', selectOptions: "positions"},
      {field: 'severity', value: 'primary', selectOptions: 'severities'},
      {field: 'size', value: '', selectOptions: 'sizes'},
      {field: 'appearance', value: 'basic', selectOptions: 'appearances'},
      {field: 'nextLabel', value: 'New Label'},
      {field: 'nextRaised', value: true},
      {field: 'nextAppearance', value: 'basic', selectOptions: 'appearances'},
      {field: 'nextSeverity', value: 'secondary', selectOptions: 'severities'},
    ],
  }

  return (
      <Preview {...previewProps}>
        <Button
            onClickAsync={({loadingCallback}) => {
              setTimeout(() => {
                state.current = !state.current;
                loadingCallback(state.current);
              }, 2000)
            }}/>
      </Preview>
  )
}
