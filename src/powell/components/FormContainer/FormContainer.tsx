import {ForwardedRef, forwardRef, PropsWithChildren, useEffect, useRef} from "react";
import {FormProvider} from "@powell/components/FormContainer";
import {$Form, $Formik, $FormikValues} from "@powell/api";
import {FormContainerProps} from "@powell/models";
import {useSafeFormikContext} from "@powell/hooks";

const FormContent = <T extends $FormikValues>(props: PropsWithChildren<{onInit: FormContainerProps<T>['onInit']}>) => {
  const {children, onInit} = props;
  const formikContext = useSafeFormikContext();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      onInit?.(formikContext!);
      initialized.current = true;
    }
  }, [formikContext, onInit]);

  return (
      <>
        {children}
      </>
  );
}

export const FormContainer = forwardRef(<T extends $FormikValues>(props: FormContainerProps<T>, ref: ForwardedRef<HTMLFormElement>) => {
  const {children, onInit, className, ...rest} = props;

  return (
      <$Formik {...rest}>
        {
          (context) => (
              <FormProvider {...rest}>
                <$Form ref={ref} className={className}>
                  {
                    <FormContent<T> onInit={onInit}>
                      {typeof children === 'function' ? children(context) : children}
                    </FormContent>
                  }
                </$Form>
              </FormProvider>
          )
        }
      </$Formik>
  )
})
