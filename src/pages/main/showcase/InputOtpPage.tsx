import {FormContainer} from "@powell/components/FormContainer";
import {InputOtp} from "@powell/components/InputOtp";
import {Button} from "@powell/components/Button";
import {useRef, useState} from "react";
import {$FormikContextType, $Yup} from "@powell/api";

export const InputOtpPage = () => {
  const [formValue, setFormValue] = useState<any>({n: ''})
  const [formContext, setFormContext] = useState<$FormikContextType<any>>({})
  const formRef = useRef<HTMLFormElement>()

  const updateForm = () => {
    setFormValue({
      n: 'aaaa'
    })
  }

  return (
      <>
        <FormContainer className="flex flex-col gap-2 p-10" initialValues={{}} onSubmit={v => console.log(v)}>

          <InputOtp label="label" labelPosition="fix-side" name="n"/>
          <InputOtp label="label" labelPosition="fix-top" name="n"/>

          <Button type="submit" label="submit"/>
        </FormContainer>

        <FormContainer
            ref={formRef}
            validateOnChange
            onInit={setFormContext}
            enableReinitialize={true}
            initialValues={formValue}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={
              $Yup.object({
                n: $Yup.string()
                .min(8, 'Must be at least 8 characters')
                .max(20, 'Must be less  than 20 characters')
                .required('Username is required')
                .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces')
              })
            }>
          {
            (context) => (
                <>
                  <InputOtp label="Username" name="n"/>
                  <Button type="submit" label="Submit"></Button>
                  <Button type="reset" label="Reset"></Button>
                  <Button label="Update" onClick={updateForm}></Button>
                </>
            )
          }
        </FormContainer>
      </>
  )
}
