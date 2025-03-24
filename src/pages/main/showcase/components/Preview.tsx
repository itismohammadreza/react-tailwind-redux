import {$Card, $Panel, $Yup} from "@powell/api";
import {PreviewOptions} from "@pages/main/showcase/components/PreviewOptions.tsx";
import {Children, cloneElement} from "react";
import {FormContainer} from "@powell/components/FormContainer";
import {Button} from "@powell/components/Button";

export const Preview = ({
                          previewOptions = [],
                          component,
                          description,
                          onOptionChange,
                          withForm = true,
                          children
                        }: any) => {

  const preview = () => {
    return Children.map(children, (child) => cloneElement(child, {...getOption()}));
  };

  const getOption = () => {
    return previewOptions.reduce((acc, curr) => ({...acc, [curr.field]: curr.value}), {})
  }

  return (
      <div className="container py-6 space-y-4">
        <$Card>
          <h3>{component}</h3>
          <h5>{description}</h5>
        </$Card>

        {
            previewOptions.length > 0 && (
                <$Panel header={'Options'}>
                  <PreviewOptions options={previewOptions} onOptionChange={onOptionChange}/>
                </$Panel>
            )
        }

        <$Panel style={{minHeight: '110px'}} header={'preview'}>
          {
            withForm ?
                <FormContainer
                    validationSchema={
                      $Yup.object({
                        n: $Yup.string()
                        .required('Username is required')
                      })
                    }
                    className="flex flex-col gap-2 p-10"
                    initialValues={{}}
                    onSubmit={v => console.log(v)}>
                  {preview()}
                  <Button type="submit" label="Submit"/>
                </FormContainer>
                :
                children
          }
        </$Panel>
      </div>
  );
};
