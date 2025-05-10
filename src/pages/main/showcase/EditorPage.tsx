import {Editor} from "@powell/components/Editor";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {EditorProps} from "@powell/models";

export const EditorPage = () => {
  const previewProps: PreviewProps<EditorProps> = {
    component: "Editor",
    description: "Editor is rich text editor component based on Quill.",
    options: [
      {
        field: 'label',
        value: 'Label',
      },
    ]
  }

  return (
      <Preview {...previewProps}>
        <Editor name="n"/>
      </Preview>
  )
}
