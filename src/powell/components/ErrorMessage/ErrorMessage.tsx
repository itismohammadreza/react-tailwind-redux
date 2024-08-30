import {ReactNode} from "react";
import "./ErrorMessage.scss";

interface ErrorMessageProps {
  message?: string;
  parseError?: (message: string) => ReactNode;
  hint?: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const {parseError, message, hint} = props;
  return (
      <>
        {
          message
              ?
              parseError?.(message) || <small className="error">{message}</small>
              :
              <small className="hint">{hint}</small>
        }
      </>
  )
}
