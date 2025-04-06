import {ChangeEvent, ReactNode, useCallback, useRef, useState} from "react";
import {Addon, LabelPosition} from "@powell/models";
import {
  $classNames,
  $Editor,
  $EditorProps,
  $ErrorMessage,
  $Field,
  $FieldProps,
  $FloatLabel,
  $IconField,
  $IconFieldProps,
  $InputIcon,
  $UniqueComponentId
} from "@powell/api";
import {getAddonTemplate, isRequiredField, transformer} from "@powell/utils";
import {useApplyConfig, useFormContext} from "@powell/hooks";
import {SafeAny} from "@powell/models/common";
import './Editor.scss';

interface EditorProps extends $EditorProps {
  name?: string;
  parseError?: (error: string) => ReactNode;
  transform?: {
    input?: (value: SafeAny) => string;
    output?: (event: ChangeEvent<HTMLInputElement>) => SafeAny;
  };
  showRequiredStar?: boolean;
  rtl?: boolean;
  label?: string;
  icon?: string | ReactNode;
  hint?: string;
  addon?: Addon;
  iconPosition?: $IconFieldProps["iconPosition"];
  labelPosition?: LabelPosition;
}

export const Editor = (props: EditorProps) => {
  props = useApplyConfig(props);
  const {
    parseError,
    name,
    transform = {},
    iconPosition = 'left',
    labelPosition,
    addon,
    icon,
    rtl,
    showRequiredStar,
    ...rest
  } = props;

  const inputId = useRef($UniqueComponentId());

  // Check if we're in Formik context
  const formContext = useFormContext();
  const withinForm = !!formContext && !!name;
  const isRequired = withinForm && isRequiredField(formContext, name);

  // Internal state for non-Formik usage
  const [internalValue, setInternalValue] = useState(rest.value || '');

  const rootEl = useCallback(() => {
    const commonProps = {
      ...rest,
      id: inputId.current,
      name,
    };

    if (withinForm) {
      // if in Formik context
      return (
          <$Field name={name}>
            {({field, meta}: $FieldProps) => {
              const {value, onChange} = transformer({
                value: field.value,
                onChange: (event: string) => formContext.setFieldValue(name, event),
                transform: {
                  input: transform.input ?? (value => value),
                  output: transform.output ?? (event => event.htmlValue)
                }
              });

              return (
                  <>
                    <$Editor
                        {...commonProps}
                        value={value}
                        onTextChange={(event: SafeAny) => {
                          onChange(event);
                          rest.onChange?.(event);
                        }}
                        onBlur={(event) => {
                          field.onBlur(event);
                          rest.onBlur?.(event);
                        }}
                    />
                    <$ErrorMessage name={name}>
                      {
                        (message) => <small className="error">{parseError?.(message) ?? message}</small>
                      }
                    </$ErrorMessage>
                    <small className="hint">{rest.hint}</small>
                  </>
              );
            }}
          </$Field>
      );
    } else {
      // if outside Formik context
      const {value, onChange} = transformer({
        value: internalValue,
        onChange: (event: string) => setInternalValue(event),
        transform: {
          input: transform.input ?? (value => value),
          output: transform.output ?? (event => event.htmlValue)
        }
      });

      return (
          <$Editor
              {...commonProps}
              value={value}
              onTextChange={(event: SafeAny) => {
                onChange(event);
                rest.onChange?.(event);
              }}
              onBlur={rest.onBlur}
          />
      );
    }
  }, [internalValue, props]);

  const labelEl = rest.label && (
      <label htmlFor={inputId.current}>
        {rest.label}
        {isRequired && showRequiredStar ? '*' : ''}
      </label>
  );

  const iconEl = icon && (
      typeof icon === 'string'
          ? <$InputIcon className={icon}></$InputIcon>
          : <$InputIcon>{icon}</$InputIcon>
  );

  const withIcon = (
      <$IconField iconPosition={iconPosition}>
        {iconEl}
        {rootEl()}
      </$IconField>
  );

  return (
      <div className={$classNames('chips-wrapper',
          {
            [`label-${labelPosition}`]: rest.label,
            [`icon-${iconPosition}`]: iconEl,
            'is-rtl': rtl,
            'is-ltr': !rtl,
            'addon-before': addon?.before,
            'addon-after': addon?.after,
          })}>
        <div className="field">
          {labelPosition !== 'float' && labelEl}
          <div className={$classNames('field-inner', {"p-inputgroup": addon})}>
            {getAddonTemplate(addon?.before)}
            {
              labelPosition === 'float' ? (
                  <$FloatLabel>
                    {icon ? withIcon : rootEl()}
                    {labelEl}
                  </$FloatLabel>
              ) : (
                  icon ? withIcon : rootEl()
              )
            }
            {getAddonTemplate(addon?.after)}
          </div>
        </div>
      </div>
  );
};
