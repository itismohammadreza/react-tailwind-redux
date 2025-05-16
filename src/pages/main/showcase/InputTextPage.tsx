import {InputText} from "@powell/components/InputText";
import {PreviewProps} from "@pages/main/showcase/models";
import {Preview} from "@pages/main/showcase/components/Preview";
import {InputTextProps} from "@powell/models";
import {usePowellConfig} from "@powell/hooks";

export const InputTextPage = () => {
  const [config] = usePowellConfig();

  const previewProps: PreviewProps<InputTextProps> = {
    component: "InputText",
    description: "InputText is an extension to standard input element with theming and keyfiltering.",
    options: [
      {field: 'label', value: 'label'},
      {field: 'labelWidth', value: 100},
      {field: 'hint', value: ''},
      {field: 'rtl', value: config.rtl},
      {field: 'showRequiredStar', value: config.showRequiredStar},
      {field: 'variant', value: 'outlined', selectOptions: 'variants'},
      {field: 'labelPosition', selectOptions: 'labelPositions', value: config.labelPosition},
      {field: 'addon', selectOptions: 'addon', value: 'none'},
      {field: 'inputSize', value: 'none', selectOptions: 'sizes'},
      {field: 'disabled', value: false},
      {field: 'showClear', value: false},
    ]
  }

  return (
      <Preview {...previewProps}>
        <InputText name="n"/>
      </Preview>
      // <FormContainer
      //     ref={formRef}
      //     onInit={setFormContext}
      //     enableReinitialize={true}
      //     initialValues={formValue}
      //     onSubmit={(values) => {
      //       alert(JSON.stringify(values, null, 2));
      //     }}
      //     validationSchema={
      //       $Yup.object({
      //         n: $Yup.string()
      //         .min(8, 'Must be at least 8 characters')
      //         .max(20, 'Must be less  than 20 characters')
      //         .required('Username is required')
      //         .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces')
      //       })
      //     }>
      //   {
      //     (context) => (
      //         <>
      //           <InputText label="Username" name="n"/>
      //           <Button type="submit" label="Submit"></Button>
      //           <Button type="reset" label="Reset"></Button>
      //           <Button label="Update" onClick={updateForm}></Button>
      //         </>
      //     )
      //   }
      // </FormContainer>
      //
      // <FormContainer
      //     enableReinitialize={true}
      //     initialValues={{
      //       social: {
      //         facebook: '',
      //       },
      //     }}
      //     onSubmit={values => {
      //       console.log(values);
      //     }}
      //     validationSchema={
      //       $Yup.object({
      //         social: $Yup.object({
      //           facebook: $Yup.string().required('Username is required'),
      //         })
      //       })
      //     }
      // >
      //   <InputText name="social.facebook"/>
      //   <Button type="submit" label="submit"/>
      // </FormContainer>
  )
}
