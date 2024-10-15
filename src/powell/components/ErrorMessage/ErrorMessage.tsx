import {ReactNode} from "react";
import "./ErrorMessage.scss";
import {$FormikProps} from "@powell/api";
import {SafeAny} from "@powell/models";
import {getFieldErrorMessage, isTouchedField} from "@powell/utils";

interface ErrorMessageProps {
  message?: string;
  form?: $FormikProps<SafeAny>;
  parseError?: (message: string) => ReactNode;
  hint?: string;
  name: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const {hint, form, name, parseError} = props;
  const isTouched: boolean = isTouchedField(form?.touched ?? {}, name);
  const errorMessage: string = getFieldErrorMessage(form?.errors ?? {}, name);

  return (
      (isTouched && errorMessage)
          ?
          <small className="error">{parseError?.(errorMessage) ?? errorMessage}</small>
          :
          <small className="hint">{hint}</small>
  )
}
