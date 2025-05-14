import {Editor} from "@powell/components/Editor";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {EditorProps} from "@powell/models";
import {usePowellConfig} from "@root/powell";

export const EditorPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<EditorProps> = {
    component: "Editor",
    description: "Editor is rich text editor component based on Quill.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'fixLabelPositions', value: config.fixLabelPosition},
    ]
  }

  return (
      <Preview {...previewProps}>
        <Editor name="n"/>
      </Preview>
  )
}
