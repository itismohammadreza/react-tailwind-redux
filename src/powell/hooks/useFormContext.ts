import {useContext} from "react";
import {FormContext} from "@powell/components/FormContainer";
import {$FormikConfig, $FormikContextType, $FormikValues, $useFormikContext} from "@powell/api";

export const useFormContext = () => {
  const context = useContext(FormContext) as $FormikConfig<$FormikValues>;
  const formikContext = $useFormikContext();

  if (!context || !formikContext) {
    return null;
  }

  return {...context, ...formikContext} as $FormikContextType<$FormikValues>;
};
