import {createContext, PropsWithChildren} from "react";
import {$FormikConfig, $FormikValues} from "@powell/api";
import {SafeAny} from "@powell/models";

export const FormContext = createContext<$FormikConfig<$FormikValues> | undefined>(undefined);

export const FormProvider = <T extends $FormikValues>(props: PropsWithChildren<$FormikConfig<T>>) => {
  const {children, ...rest} = props;

  return (
      <FormContext.Provider value={rest as $FormikConfig<SafeAny>}>
        <>
          {children}
        </>
      </FormContext.Provider>
  );
};

