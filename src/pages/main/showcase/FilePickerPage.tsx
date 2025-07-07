import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {FilePickerProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";
import {FilePicker} from "@powell/components/FilePicker";

export const FilePickerPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<FilePickerProps> = {
    component: "FileUpload",
    description: "FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'disabled', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <FilePicker name="n"/>
      </Preview>
  )
}
