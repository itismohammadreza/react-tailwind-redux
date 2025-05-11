import {InputText} from "@powell/components/InputText";
import {useState} from "react";

export const UtilsPage = () => {
  const [value, setValue] = useState('Default Value');

  return (
      <>
        <h3>Outside Form Context:</h3>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} label="Username"/>
      </>
  )
}
