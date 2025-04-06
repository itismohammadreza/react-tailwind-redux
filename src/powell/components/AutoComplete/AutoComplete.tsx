import { ChangeEvent, ReactNode } from "react";
import { $AutoComplete, $AutoCompleteProps } from "@powell/api";
import { SafeAny } from "@powell/models/common";
import { BaseForm, BaseFormProps } from "../BaseForm/BaseForm";
import './AutoComplete.scss';

type AutoCompleteProps = Omit<$AutoCompleteProps, 'onBlur' | 'onChange' | 'variant'> &
  Omit<BaseFormProps, 'onBlur' | 'onChange'> & {
    name?: string;
    parseError?: (error: string) => ReactNode;
    transform?: {
      input?: (value: SafeAny) => string;
      output?: (event: ChangeEvent<HTMLInputElement>) => SafeAny;
    };
  };

export const AutoComplete = (props: AutoCompleteProps) => {
  return (
    <BaseForm
      {...props}
      component={$AutoComplete}
      wrapperClassName="auto-complete-wrapper"
      getValue={(event) => event.value}
      eventProps={{
        change: 'onChange',
        blur: 'onBlur'
      }}
    />
  );
};
