import {memo, MouseEvent, useRef, useState} from "react";
import {PrimeButton, PrimeButtonProps, primeClassNames} from "@powell/api";
import {ButtonAppearance} from "@powell/models";

type ButtonState = 'default' | 'loading' | 'next';

interface ButtonProps extends Omit<PrimeButtonProps, "loading" | "link" | "text" | "outlined"> {
  async?: true;
  onClickAsync?: (event: { loadingCallback: (ok?: boolean) => void, event: MouseEvent<HTMLButtonElement> }) => void;
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

export const Button = memo((props: ButtonProps) => {
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
      label: newState === 'default' ? props.label : (nextLabel ?? props.label),
      icon: newState === 'default' ? props.icon : (nextIcon ?? props.icon),
      appearance: newState === 'default' ? props.appearance : (nextAppearance ?? props.appearance),
      raised: newState === 'default' ? props.raised : (nextRaised ?? props.raised),
      severity: newState === 'default' ? props.severity : (nextSeverity ?? props.severity),
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
      <PrimeButton
          type={type}
          {...rest}
          onClick={handleClick}
          label={async ? tempProps.current.label : props.label}
          icon={async ? tempProps.current.icon : props.icon}
          severity={async ? tempProps.current.severity : props.severity}
          raised={async ? tempProps.current.raised : props.raised}
          text={async ? tempProps.current.appearance === 'text' : props.appearance === 'text'}
          outlined={async ? tempProps.current.appearance === 'outlined' : props.appearance === 'outlined'}
          link={async ? tempProps.current.appearance === 'link' : props.appearance === 'link'}
          loading={_state === 'loading'}
          className={primeClassNames(props.className, `state-${_state}`)}
      />
  )
})
