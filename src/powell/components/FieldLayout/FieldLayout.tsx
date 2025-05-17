import {CSSProperties, PropsWithChildren} from "react";
import {$classNames, $FloatLabel, $IconField, $InputIcon} from "@powell/api";
import {FieldLayoutProps} from "@powell/models/props";
import {AddonConfig} from "@powell/models";
import {Button} from "@powell/components/Button";

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
    className,
    containerStyle,
    disabled
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

  const getAddonTemplate = (config?: AddonConfig) => {
    if (!config) {
      return <></>
    }
    const {type, ...rest} = config;
    switch (type) {
      case "button":
        return <Button {...rest} />
      case "icon":
        return (
            <span className="p-inputgroup-addon" onClick={rest?.onClick}>
              <i className={rest.icon}></i>
            </span>
        )
      case "text":
        return <span className="p-inputgroup-addon">{rest.text}</span>
    }
  }

  return (
      <div className={$classNames(
          className,
          `${componentName}-wrapper`,
          {
            [`variant-${variant}`]: !!variant,
            'p-inputtext-sm': inputSize === 'small',
            'p-inputtext-lg': inputSize === 'large',
            'control-disabled': disabled,
            [`label-${labelPosition}`]: label,
            [`icon-${iconPosition}`]: iconEl,
            'addon-before': addon?.before && !addon?.after,
            'addon-after': addon?.after && !addon?.before,
            'addon-both': addon?.before && addon?.after,
          })}
           dir={rtl ? 'rtl' : 'ltr'}
           style={containerStyle as CSSProperties}>
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
