import { Button } from "@powell/components/Button";
import { useRef } from "react";

export const Home = () => {
  const state = useRef(false);
  const c = ({loadingCallback}) => {
    setTimeout(() => {
      state.current = !state.current;
      loadingCallback(state.current);
    }, 2000)
  }

  return (
      <>
        <h2>Home Page</h2>

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
      </>
  )
}
