import { Preview } from "@pages/main/showcase/components/Preview.tsx";
import { AutoComplete } from "@powell/components/AutoComplete";

export const AutoCompletePage = () => {
  return (
    <>
      <Preview
        previewOptions={[
          {
            field: 'label',
            value: 'Label',
          },
          {
            field: 'multiple',
            value: true,
          },
          {
            field: 'labelPosition',
            value: 'ifta',
            options: 'labelPositions',
          }
        ]}
        component={"AutoComplete"}
        description={'Description'}>
        <AutoComplete label="label" labelPosition="float" name="n" />
      </Preview>
    </>
  );
};
