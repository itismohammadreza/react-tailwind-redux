import { $Card, $Panel, $Yup } from "@powell/api";
import { PreviewOptions } from "@pages/main/showcase/components/PreviewOptions";
import { Children, cloneElement, ReactElement, useState } from "react";
import { FormContainer } from "@powell/components/FormContainer";
import { Button } from "@powell/components/Button";

interface PreviewProps {
  previewOptions: Array<{
    field: string;
    value: string | number | boolean;
    options?: string;
    label?: string;
  }>;
  component: string;
  description: string;
  onOptionChange?: (option: { field: string; value: string | number | boolean }) => void;
  withForm?: boolean;
  children: ReactElement;
}

export const Preview = ({
  previewOptions = [],
  component,
  description,
  onOptionChange,
  withForm = true,
  children
}: PreviewProps) => {
  const [options, setOptions] = useState(previewOptions);

  const handleOptionChange = (option: { field: string; value: string | number | boolean }) => {
    setOptions(prev => prev.map(opt =>
      opt.field === option.field ? { ...opt, value: option.value } : opt
    ));
    onOptionChange?.(option);
  };

  const getOption = () => {
    return options.reduce((acc, curr) => ({ ...acc, [curr.field]: curr.value }), {});
  };

  const preview = () => {
    return Children.map(children, (child) => cloneElement(child, { ...getOption() }));
  };

  return (
    <div className="container py-6 space-y-4">
      <$Card>
        <h3>{component}</h3>
        <h5>{description}</h5>
      </$Card>

      {previewOptions.length > 0 && (
        <$Panel header={'Options'}>
          <PreviewOptions options={options} onOptionChange={handleOptionChange} />
        </$Panel>
      )}

      <$Panel style={{ minHeight: '110px' }} header={'preview'}>
        {withForm ? (
          <FormContainer
            validationSchema={
              $Yup.object({
                n: $Yup.string()
                  .required('Username is required')
              })
            }
            className="flex flex-col gap-2 p-10"
            initialValues={{ n: null }}
            onSubmit={v => console.log(v)}>
            {preview()}
            <Button type="submit" label="Submit" />
          </FormContainer>
        ) : (
          preview()
        )}
      </$Panel>
    </div>
  );
};
