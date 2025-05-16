import {$Card, $Panel, $Yup} from "@powell/api";
import {PreviewOptions} from "@pages/main/showcase/components/PreviewOptions";
import {Children, cloneElement, useState} from "react";
import {FormContainer} from "@powell/components/FormContainer";
import {Button} from "@powell/components/Button";
import {PreviewOption, PreviewProps} from "@pages/main/showcase/models";
import {SafeAny} from "@powell/models";

export const Preview = (props: PreviewProps) => {
  const {options = [], component, description, withForm = true, children} = props;
  const [previewOptions, setPreviewOptions] = useState(options);

  const handleOptionChange = (option: PreviewOption) => {
    setPreviewOptions(prev => prev.map(opt =>
        opt.field === option.field ? {...opt, value: option.value} : opt
    ));
  };

  const preview = () => {
    const getAddonConfig = (value: string) => {
      let finalValue: SafeAny = null;
      const addon = {type: 'icon', icon: 'pi pi-prime'}
      switch (value) {
        case 'none':
          finalValue = null;
          break;
        case 'iconRight':
          finalValue = {icon: 'pi pi-prime', iconPosition: 'right'};
          break;
        case 'iconLeft':
          finalValue = {icon: 'pi pi-prime', iconPosition: 'left'};
          break;
        case 'addonBefore':
          finalValue = {addon: {before: addon}}
          break;
        case 'addonAfter':
          finalValue = {addon: {after: addon}}
          break;
        case 'addonBoth':
          finalValue = {addon: {before: addon, after: addon}}
          break;
      }
      return finalValue;
    }
    const props = previewOptions.reduce((acc, curr) => ({
      ...acc,
      ...(curr.field === 'addon' ? getAddonConfig(curr.value) : {[curr.field]: curr.value})
    }), {});
    return Children.map(children, (child) => cloneElement(child, props));
  };

  return (
      <div className="container mx-auto p-4 space-y-4">
        <$Card className="[&_.p-card-content]:p-0">
          <h3 className="text-2xl font-bold mb-3">{component}</h3>
          <h5 className="text-gray-400">{description}</h5>
        </$Card>

        {options.length > 0 && (
            <$Panel header="Options">
              <PreviewOptions options={previewOptions} onOptionChange={handleOptionChange}/>
            </$Panel>
        )}

        <$Panel style={{minHeight: '110px'}} header="preview">
          {withForm ? (
              <FormContainer
                  validationSchema={
                    $Yup.object({
                      n: $Yup.mixed().required('Field is required')
                    })
                  }
                  className="flex flex-col gap-2 p-10"
                  initialValues={{n: null}}
                  onSubmit={v => console.log(v)}>
                {preview()}
                <Button type="submit" label="Submit"/>
              </FormContainer>
          ) : (
              preview()
          )}
        </$Panel>
      </div>
  );
};
