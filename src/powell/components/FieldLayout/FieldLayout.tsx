import {useApplyConfig} from "@powell/hooks";
import {PropsWithChildren, useCallback, useRef} from "react";
import {$classNames, $FloatLabel, $IconField, $InputIcon, $UniqueComponentId} from "@powell/api";
import {getAddonTemplate} from "@powell/utils";
import {FieldLayoutProps} from "@powell/models/props";
import "./FieldLayout.scss";

export const FieldLayout = (props: PropsWithChildren<FieldLayoutProps>) => {
  props = useApplyConfig(props);

  const {
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
    errorElement,
  } = props;

  const inputId = useRef($UniqueComponentId());

  const rootEl = useCallback(() => {
    return props.children;
  }, [props]);

  const labelEl = props.label && (
      <label htmlFor={inputId.current}>
        {props.label}
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
      <div className={$classNames(
          `${componentName}-wrapper`,
          `variant-${variant}`,
          `p-inputtext-${inputSize}`,
          {
            [`label-${labelPosition}`]: props.label,
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
        <small className="error-message font-sm text-red-600">{errorElement}</small>
        <small className="hint">{hint}</small>
      </div>
  );
}
