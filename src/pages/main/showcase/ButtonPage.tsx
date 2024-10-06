import {Button} from "@powell/components/Button";
import {useRef} from "react";

export const ButtonPage = () => {
  const state = useRef(false);

  return (
      <div className="flex flex-col gap-2 p-10">
        <Button
            onClickAsync={({loadingCallback}) => {
              setTimeout(() => {
                state.current = !state.current;
                loadingCallback(state.current);
              }, 2000)
            }}
            async={true}
            size="small"
            label="prev"
            nextLabel="next"
            appearance="text"
            nextAppearance="outlined"
            severity="danger"
            nextSeverity="success"/>
      </div>
  )
}
