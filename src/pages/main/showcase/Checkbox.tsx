import { FormContainer } from "@powell/components/FormContainer";
import { Checkbox } from "@powell/components/Checkbox";
import { Button } from "@powell/components/Button";
import { useConfig } from "@hooks/useConfig";

export const CheckboxPage = () => {
  const [{rtl}, setConfig] = useConfig();
  return (
      <FormContainer onSuccess={v => console.log(v)}>
        <input type="checkbox" defaultChecked={rtl} onChange={v => setConfig({rtl: v.target.checked})}/>
        <div className="flex flex-col gap-2 p-10">
          <Checkbox label="label" name="n"/>
        </div>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
