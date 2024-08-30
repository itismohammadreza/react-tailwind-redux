import {FormContainer} from "@powell/components/FormContainer";
import {InputText} from "@powell/components/InputText";
import {Button} from "@powell/components/Button";

export const UtilsPage = () => {
  return (
      <>
        <h3>transform input value:</h3>
        <FormContainer
            validateOnChange
            enableReinitialize={true}
            initialValues={{n: ''}}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}>
          {
            (context) => (
                <>
                  <InputText
                      label="Username"
                      name="n"
                      transform={{
                        input: (v) => v && Number(v.replace(/,/g, '')).toLocaleString(),
                        output: (v) => v.target.value && v.target.value.replace(/,/g, '')
                      }}/>
                  <Button type="submit" label="Submit"></Button>
                </>
            )
          }
        </FormContainer>
        <h3>outside formik context:</h3>
        <InputText value={"test"} onChange={(e) => console.log(e.target.value)} label="Username"/>
      </>
  )
}
