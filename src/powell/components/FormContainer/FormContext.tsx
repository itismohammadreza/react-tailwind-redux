import {createContext, PropsWithChildren} from "react";
import {$FormikConfig, $FormikValues} from "@powell/api";

export const FormContext = createContext<$FormikConfig<$FormikValues>>(undefined);

export const FormProvider = <T extends $FormikValues>(props: PropsWithChildren<$FormikConfig<T>>) => {
  const {children, ...rest} = props;

  return (
      <FormContext.Provider value={rest}>
        <>
          {children}
        </>
      </FormContext.Provider>
  );
};

