import {PropsWithChildren} from "react";
import {$classNames, $FloatLabel, $IconField, $InputIcon} from "@powell/api";
import {getAddonTemplate} from "@powell/utils";
import {FieldLayoutProps} from "@powell/models/props";

export const FieldLayout = (props: PropsWithChildren<FieldLayoutProps>) => {
  const {
    children,
    label,
    componentName,
    iconPosition = 'left',
    labelPosition,
    addon,
    hint,
    icon,
    rtl,
    isRequired,
    showRequiredStar,
    variant,
    inputSize,
    id,
    errorElement,
  } = props;

  const labelEl = label && (
      <label htmlFor={id}>
        {label}
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
        {children}
      </$IconField>
  );

  return (
      <div className={$classNames(
          `${componentName}-wrapper`,
          `variant-${variant}`,
          {
            'p-inputtext-sm': inputSize === 'small',
            'p-inputtext-lg': inputSize === 'large',
            [`label-${labelPosition}`]: label,
            [`icon-${iconPosition}`]: iconEl,
            'addon-before': addon?.before,
            'addon-after': addon?.after,
          })}
           dir={rtl ? 'rtl' : 'ltr'}>
        <div className="field">
          {labelPosition !== 'float' && labelEl}
          <div className={$classNames('field-inner', {"p-inputgroup": addon})}>
            {getAddonTemplate(addon?.before)}
            {
              labelPosition === 'float' ? (
                  <$FloatLabel>
                    {icon ? withIcon : children}
                    {labelEl}
                  </$FloatLabel>
              ) : (
                  icon ? withIcon : children
              )
            }
            {getAddonTemplate(addon?.after)}
          </div>
        </div>
        {errorElement && <small className="error-message">{errorElement}</small>}
        {hint && <small className="hint">{hint}</small>}
      </div>
  );
}
