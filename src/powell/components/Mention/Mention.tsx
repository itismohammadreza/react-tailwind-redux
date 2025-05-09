import {MentionProps} from "@powell/models";
import {$Mention} from "@powell/api";
import {splitProps} from "@powell/utils";
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";
import './Mention.scss';

export const Mention = (props: MentionProps) => {
  const {controlProps, layoutProps, rest} = splitProps<MentionProps>(props, {
    controlProps: [
      {
        key: 'name',
        keepInRest: true,
      },
      {
        key: 'inputId',
        alias: 'id'
      },
      'parseError',
    ],
    layoutProps: [
      'label',
      'iconPosition',
      'labelPosition',
      'addon',
      'hint',
      'icon',
      'rtl',
      'showRequiredStar',
      'inputSize',
    ],
  });

  return (
      <FieldControl {...controlProps}>
        {
          (control) => (
              <FieldLayout
                  {...layoutProps}
                  componentName="mention"
                  id={control.id}
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Mention
                    {...rest}
                    inputId={control.id}
                    value={control.field ? control.field.value : props.value}
                    onChange={(event) => {
                      control.handleChange?.((event.target as HTMLInputElement).value);
                      props.onChange?.(event);
                    }}
                    onBlur={(event) => {
                      control.handleBlur?.(event);
                      props.onBlur?.(event);
                    }}
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
