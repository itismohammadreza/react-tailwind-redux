import {Form, Formik, FormikConfig, FormikContextType, FormikValues, useFormikContext} from "formik";
import {ForwardedRef, forwardRef, PropsWithChildren, useEffect, useRef} from "react";
import {FormProvider} from "@powell/components/FormContainer";

interface FormContainerProps<T extends FormikValues> extends FormikConfig<T> {
  onInit?: (context: FormikContextType<T>) => void;
}

const FormContent = <T extends FormikValues>(props: PropsWithChildren<{onInit: FormContainerProps<T>['onInit']}>) => {
  const {children, onInit} = props;
  const formikContext: FormikContextType<T> = useFormikContext();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      onInit?.(formikContext);
      initialized.current = true;
    }
  }, [formikContext, onInit]);

  return (
      <>
        {children}
      </>
  );
}

export const FormContainer = forwardRef(<T extends FormikValues>(props: FormContainerProps<T>, ref: ForwardedRef<HTMLFormElement>) => {
  const {children, onInit, ...rest} = props;

  return (
      <Formik {...rest}>
        {
          (context) => (
              <FormProvider {...rest}>
                <Form ref={ref}>
                  {
                    <FormContent<T> onInit={onInit}>
                      {typeof children === 'function' ? children(context) : children}
                    </FormContent>
                  }
                </Form>
              </FormProvider>
          )
        }
      </Formik>
  )
})
