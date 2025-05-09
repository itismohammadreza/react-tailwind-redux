import {$ListBox} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import {ListBoxProps} from "@powell/models";
import './ListBox.scss';

export const ListBox = (props: ListBoxProps) => {
  const {controlProps, layoutProps, rest} = splitProps<ListBoxProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      'id',
      'parseError',
    ],
    layoutProps: [
      'label',
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
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$ListBox
                    {...rest}
                    id={control.id}
                    value={control.field ? control.field.value : props.value}
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
