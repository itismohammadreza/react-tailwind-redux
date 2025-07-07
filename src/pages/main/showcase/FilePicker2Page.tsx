import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {FilePicker2Props, FilePickerProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";
import {FilePicker} from "@powell/components/FilePicker";
import {FilePicker2} from "@powell/components/FilePicker2";

export const FilePicker2Page = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<FilePicker2Props> = {
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
        <FilePicker2 name="n"/>
      </Preview>
  )
}
