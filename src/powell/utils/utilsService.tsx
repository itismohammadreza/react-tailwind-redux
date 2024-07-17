import { ReactNode } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { FixLabelPos, LabelPos } from "@powell/models/common.ts";

export const withFixLabel = (component: ReactNode, label: string, labelPos: FixLabelPos) => {
  const id = getId();
  return (
      <div className="field" style={{display: 'flex', flexDirection: labelPos === 'fix-top' ? 'column' : 'row'}}>
        <label>{label}</label>
        {component}
      </div>
  )
}

export const withFloatLabel = (component: ReactNode, label: string) => {
  return (
      <FloatLabel>
        {component}
        <label htmlFor="username">{label}</label>
      </FloatLabel>
  )
}

export const withLabel = (component: ReactNode, label: string, labelPos: LabelPos) => {
  switch (labelPos) {
    case "fix-side":
    case "fix-top":
      return withFixLabel(component, label, labelPos);
    case "float":
    default:
      return withFloatLabel(component, label)
  }
}

export const withAddon = (component: ReactNode, addonConfig) => {
  return (
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
        </span>
        {component}
      </div>
  )
}

export const getId = () => {
  return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};
