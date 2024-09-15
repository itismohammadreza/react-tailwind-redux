import {useContext} from "react";
import {FormikConfig, FormikContextType, FormikValues, useFormikContext} from "formik";
import {FormContext} from "@powell/components/FormContainer";

export const useFormContext = () => {
  const context = useContext(FormContext) as FormikConfig<FormikValues>;
  const formikContext = useFormikContext();

  if (!context || !formikContext) {
    return null;
  }

  return {...context, ...formikContext} as FormikContextType<FormikValues>;
};
