import { Preview } from "@pages/main/showcase/components/Preview.tsx";
import { AutoComplete } from "@powell/components/AutoComplete";

export const AutoCompletePage = () => {
  return (
    <>
      <Preview
        previewOptions={[
          {
            field: 'label',
            value: 'this is label',
            label: 'Label Text'
          },
          {
            field: 'multiple',
            value: true,
            label: 'Multiple Selection'
          },
          {
            field: 'labelPosition',
            value: 'float',
            options: 'labelPositions',
            label: 'Label Position'
          }
        ]}
        component={"AutoComplete"}
        description={'Description'}>
        <AutoComplete label="label" labelPosition="float" name="n" />
      </Preview>
    </>
  );
};
