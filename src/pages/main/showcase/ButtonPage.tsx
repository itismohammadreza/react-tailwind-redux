import {Button} from "@powell/components/Button";
import {useRef} from "react";

export const ButtonPage = () => {
  const state = useRef(false);
  const c = ({loadingCallback}) => {
    setTimeout(() => {
      state.current = !state.current;
      loadingCallback(state.current);
    }, 2000)
  }

  return (
      <div className="flex flex-col gap-2 p-10">
        <Button
            onClickAsync={c}
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
