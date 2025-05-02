interface BaseFormProps {
}

export const BaseForm = (props: BaseFormProps) => {

}


// import { useCallback, useRef } from "react";
// import { Addon, LabelPosition, Size } from "@powell/models";
// import {
//     $classNames,
//     $ErrorMessage,
//     $Field,
//     $FieldProps,
//     $FloatLabel,
//     $IconField,
//     $IconFieldProps,
//     $InputIcon,
//     $UniqueComponentId,
// } from "@powell/api";
// import { getAddonTemplate, isRequiredField, transformer } from "@powell/utils";
// import { useApplyConfig, useFormContext } from "@powell/hooks";
// import { SafeAny } from "@powell/models/common";
//
// export interface BaseFormProps {
//     name?: string;
//     parseError?: (error: string) => SafeAny;
//     transform?: {
//         input?: (value: SafeAny) => string;
//         output?: (event: SafeAny) => SafeAny;
//     };
//     showRequiredStar?: boolean;
//     rtl?: boolean;
//     label?: string;
//     icon?: string | SafeAny;
//     hint?: string;
//     addon?: Addon;
//     inputSize?: Size;
//     iconPosition?: $IconFieldProps["iconPosition"];
//     labelPosition?: LabelPosition;
//     variant?: string;
//     value?: SafeAny;
//     onChange?: (event: SafeAny) => void;
//     onBlur?: (event: SafeAny) => void;
//     invalid?: boolean;
//     className?: string;
//     wrapperClassName?: string;
// }
//
// interface BaseFormComponentProps extends BaseFormProps {
//     component: SafeAny;
//     componentProps?: Record<string, SafeAny>;
//     getValue?: (event: SafeAny) => SafeAny;
//     eventProps?: {
//         change: string;
//         blur: string;
//     };
// }
//
// export const BaseForm = (props: BaseFormComponentProps) => {
//     props = useApplyConfig(props);
//     const {
//         parseError,
//         name,
//         transform = {},
//         iconPosition = 'left',
//         labelPosition,
//         addon,
//         icon,
//         rtl,
//         showRequiredStar,
//         variant,
//         inputSize,
//         component: Component,
//         componentProps = {},
//         getValue = (event) => event.target.value,
//         eventProps = { change: 'onChange', blur: 'onBlur' },
//         ...rest
//     } = props;
//
//     const inputId = useRef($UniqueComponentId());
//
//     // Check if we're in Formik context
//     const formContext = useFormContext();
//     const withinForm = !!formContext && !!name;
//     const isRequired = withinForm && isRequiredField(formContext, name);
//
//     const inputEl = useCallback(() => {
//         const commonProps = {
//             ...rest,
//             ...componentProps,
//             variant,
//             id: inputId.current,
//             name,
//         };
//
//         if (withinForm) {
//             return (
//                 <$Field name={name}>
//                     {({ field, meta }: $FieldProps) => {
//                         const { value, onChange } = transformer({
//                             value: field.value,
//                             onChange: (event: string) => formContext.setFieldValue(name, event),
//                             transform: {
//                                 input: transform.input ?? (value => value),
//                                 output: transform.output ?? (event => getValue(event))
//                             }
//                         });
//
//                         const showError = meta.touched || formContext?.isSubmitting;
//
//                         const changeHandler = {
//                             [eventProps.change]: (event: SafeAny) => {
//                                 onChange(event);
//                                 rest.onChange?.(event);
//                             }
//                         };
//
//                         const blurHandler = {
//                             [eventProps.blur]: (event: SafeAny) => {
//                                 field.onBlur(event);
//                                 rest.onBlur?.(event);
//                             }
//                         };
//
//                         return (
//                             <>
//                                 <Component
//                                     {...commonProps}
//                                     {...changeHandler}
//                                     {...blurHandler}
//                                     value={value}
//                                     invalid={showError && !!meta.error}
//                                 />
//                                 {showError && (
//                                     <$ErrorMessage name={name}>
//                                         {(message) => <small className="error">{parseError?.(message) ?? message}</small>}
//                                     </$ErrorMessage>
//                                 )}
//                                 <small className="hint">{rest.hint}</small>
//                             </>
//                         );
//                     }}
//                 </$Field>
//             );
//         } else {
//             const { value, onChange } = transformer({
//                 value: rest.value,
//                 onChange: (event: string) => rest.onChange?.(event),
//                 transform: {
//                     input: transform.input ?? (value => value),
//                     output: transform.output ?? (event => getValue(event))
//                 }
//             });
//
//             const changeHandler = {
//                 [eventProps.change]: (event: SafeAny) => {
//                     onChange(event);
//                     rest.onChange?.(event);
//                 }
//             };
//
//             const blurHandler = {
//                 [eventProps.blur]: rest.onBlur
//             };
//
//             return (
//                 <Component
//                     {...commonProps}
//                     {...changeHandler}
//                     {...blurHandler}
//                     value={value}
//                 />
//             );
//         }
//     }, [props, formContext?.isSubmitting]);
//
//     const labelEl = rest.label && (
//         <label htmlFor={inputId.current}>
//             {rest.label}
//             {isRequired && showRequiredStar ? '*' : ''}
//         </label>
//     );
//
//     const iconEl = icon && (
//         typeof icon === 'string'
//             ? <$InputIcon className={icon}></$InputIcon>
//             : <$InputIcon>{icon}</$InputIcon>
//     );
//
//     const withIcon = (
//         <$IconField iconPosition={iconPosition}>
//             {iconEl}
//             {inputEl()}
//         </$IconField>
//     );
//
//     return (
//         <div className={$classNames(props.wrapperClassName,
//             `variant-${variant}`,
//             `p-inputtext-${inputSize}`,
//             {
//                 [`label-${labelPosition}`]: rest.label,
//                 [`icon-${iconPosition}`]: iconEl,
//                 'is-rtl': rtl,
//                 'is-ltr': !rtl,
//                 'addon-before': addon?.before,
//                 'addon-after': addon?.after,
//             })}>
//             <div className="field">
//                 {labelPosition !== 'float' && labelEl}
//                 <div className={$classNames('field-inner', { "p-inputgroup": addon })}>
//                     {getAddonTemplate(addon?.before)}
//                     {
//                         labelPosition === 'float' ? (
//                             <$FloatLabel>
//                                 {icon ? withIcon : inputEl()}
//                                 {labelEl}
//                             </$FloatLabel>
//                         ) : (
//                             icon ? withIcon : inputEl()
//                         )
//                     }
//                     {getAddonTemplate(addon?.after)}
//                 </div>
//             </div>
//         </div>
//     );
// };
