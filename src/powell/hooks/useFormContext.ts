import {useContext} from "react";
import {FormContext} from "@powell/components/FormContainer";
import {$FormikConfig, $FormikContext, $FormikContextType, $FormikValues, $useFormikContext} from "@powell/api";
import {SafeAny} from "@powell/models";

export const useFormContext = () => {
  const context = useContext(FormContext) as $FormikConfig<$FormikValues>;
  const formikContext = useSafeFormikContext();

  if (!context || !formikContext) {
    return null;
  }

  return {...context, ...formikContext} as $FormikContextType<$FormikValues>;
};

export function useSafeFormikContext<T = SafeAny>() {
  const context = useContext($FormikContext);
  try {
    if (context) {
      return $useFormikContext<T>();
    }
    return undefined;
  } catch {
    return undefined;
  }
}
