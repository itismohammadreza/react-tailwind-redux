import {ChangeEvent, ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$ListBox, $ListBoxProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import {SafeAny} from "@powell/models/common";
import './ListBox.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface ListBoxProps extends Omit<$ListBoxProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  transform?: {
    input?: (value: SafeAny) => string;
    output?: (event: ChangeEvent<HTMLInputElement>) => SafeAny;
  };
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const ListBox = (props: ListBoxProps) => {
  const {controlProps, layoutProps, rest} = splitProps<ListBoxProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      'parseError',
    ],
    layoutProps: [
      'labelPosition',
      'hint',
      'rtl',
      'showRequiredStar',
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="list-box"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$ListBox
                    {...rest}
                    value={control.value}
                    onChange={(event) => {
                      control.handleChange?.(event.value);
                      props.onChange?.(event);
                    }}
                    onBlur={(event) => {
                      control.handleBlur?.(event);
                      props.onBlur?.(event);
                    }}
                    invalid={!!control.meta?.error}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
