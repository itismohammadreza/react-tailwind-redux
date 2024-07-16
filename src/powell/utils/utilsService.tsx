import { FunctionComponent } from "react";
import { FloatLabel } from "primereact/floatlabel";

const withFixLabel = (Component: FunctionComponent) => {

}

const withFloatLabel = (Component: FunctionComponent) => {
  return (
      <FloatLabel>
        <Component/>
        <label htmlFor="username">Username</label>
      </FloatLabel>
  )
}

const withLabel = (Component: FunctionComponent, labelPos: 'fix-side' | 'fix-top' | 'float') => {
  switch (labelPos) {
    case "fix-side":
    case "fix-top":
      return withFixLabel(Component);
    case "float":
      return withFloatLabel(Component)
  }

}

const withAddon = (Component: FunctionComponent, addonConfig) => {
  return (
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
        </span>
        <Component/>
      </div>
  )
}
