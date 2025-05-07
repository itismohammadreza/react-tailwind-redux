import {ReactNode} from "react";
import {FixLabelPosition} from "@powell/models";
import {$Rating, $RatingProps} from "@powell/api";
import {splitProps} from "@powell/utils";
import './Rating.scss';
import {FieldControl} from "@powell/components/FieldControl";
import {FieldLayout} from "@powell/components/FieldLayout";

interface RatingProps extends Omit<$RatingProps, 'checked'> {
  checked?: boolean;
  name?: string;
  parseError?: (error: string) => ReactNode;
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  hint?: string;
  labelPosition?: FixLabelPosition;
}

export const Rating = (props: RatingProps) => {
  const {controlProps, layoutProps, rest} = splitProps<RatingProps>(props, {
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
                  componentName="rating"
                  isRequired={control.isRequired}
                  errorElement={control.errorElement}>
                <$Rating
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
                />
              </FieldLayout>
          )
        }
      </FieldControl>
  );
};
