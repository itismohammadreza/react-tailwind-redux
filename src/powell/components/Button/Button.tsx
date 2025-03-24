import {memo, MouseEvent, useCallback, useRef, useState} from "react";
import {$Button, $ButtonProps, $classNames} from "@powell/api";
import {ButtonAppearance} from "@powell/models";

type ButtonState = 'default' | 'loading' | 'next';

export interface ButtonOnClickAsyncEvent {
  loadingCallback: (ok?: boolean) => void,
  event: MouseEvent<HTMLButtonElement>
}

interface ButtonProps extends Omit<$ButtonProps, "loading" | "link" | "text" | "outlined"> {
  async?: boolean;
  onClickAsync?: (event: ButtonOnClickAsyncEvent) => void;
  appearance?: ButtonAppearance;
  nextLabel?: string;
  nextIcon?: string;
  nextRaised?: boolean;
  nextAppearance?: ButtonAppearance;
  nextSeverity?: ButtonProps['severity'];
  state?: ButtonState;
  onStateChange?: (state: ButtonState) => void;
}

type ButtonTempProps = Pick<ButtonProps, "label" | "icon" | "raised" | "appearance" | "severity">;

export const Button = (props: ButtonProps) => {
  const {
    async,
    onClickAsync,
    onClick,
    nextLabel,
    nextIcon,
    nextRaised,
    nextSeverity,
    nextAppearance,
    state = 'default',
    onStateChange,
    type = 'button',
    ...rest
  } = props;

  const [_state, _setState] = useState<ButtonState>(state);

  const getButtonTempProps = (newState: ButtonState) => {
    return {
      label: newState === 'default' ? rest.label : (nextLabel ?? rest.label),
      icon: newState === 'default' ? rest.icon : (nextIcon ?? rest.icon),
      appearance: newState === 'default' ? rest.appearance : (nextAppearance ?? rest.appearance),
      raised: newState === 'default' ? rest.raised : (nextRaised ?? rest.raised),
      severity: newState === 'default' ? rest.severity : (nextSeverity ?? rest.severity),
    }
  }

  const tempProps = useRef<ButtonTempProps>(getButtonTempProps(state));

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (async) {
      onClickAsync?.({event, loadingCallback: removeLoading});
      _setState('loading');
      onStateChange?.('loading');
    } else {
      onClick?.(event);
    }
  }

  const removeLoading = (toggleState?: boolean) => {
    const newState = toggleState ? 'next' : 'default';
    tempProps.current = getButtonTempProps(newState);
    _setState(newState);
    onStateChange?.(newState);
  }

  return (
      <$Button
          type={type}
          {...rest}
          onClick={handleClick}
          label={async ? tempProps.current.label : rest.label}
          icon={async ? tempProps.current.icon : rest.icon}
          severity={async ? tempProps.current.severity : rest.severity}
          raised={async ? tempProps.current.raised : rest.raised}
          text={async ? tempProps.current.appearance === 'text' : rest.appearance === 'text'}
          outlined={async ? tempProps.current.appearance === 'outlined' : rest.appearance === 'outlined'}
          link={async ? tempProps.current.appearance === 'link' : rest.appearance === 'link'}
          loading={_state === 'loading'}
          className={$classNames(rest.className, `state-${_state}`)}
      />
  )
}
