import { memo, MouseEvent, useRef, useState } from "react";
import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from "primereact/button";
import { classNames } from "primereact/utils";

type ButtonState = 'default' | 'loading' | 'next';

interface ButtonProps extends Omit<PrimeButtonProps, "loading"> {
  async?: true;
  onClickAsync?: (event: { loadingCallback: (ok?: boolean) => void, event: MouseEvent<HTMLButtonElement> }) => void;
  nextLabel?: string;
  nextIcon?: string;
  nextRaised?: boolean;
  nextOutlined?: boolean;
  nextText?: boolean;
  nextSeverity?: ButtonProps['severity'];
  state?: ButtonState;
  onStateChange?: (state: ButtonState) => void;
}

type ButtonTempProps = Pick<ButtonProps, "label" | "icon" | "raised" | "outlined" | "text" | "severity">;

export const Button = memo((props: ButtonProps) => {
  const {
    async,
    onClickAsync,
    onClick,
    nextLabel,
    nextIcon,
    nextRaised,
    nextOutlined,
    nextText,
    nextSeverity,
    state = 'default',
    onStateChange,
    ...rest
  } = props;

  const [_state, _setState] = useState<ButtonState>(state);

  const getButtonTempProps = (newState: ButtonState) => {
    return {
      label: newState === 'default' ? props.label : (nextLabel ?? props.label),
      icon: newState === 'default' ? props.icon : (nextIcon ?? props.icon),
      outlined: newState === 'default' ? props.outlined : (nextOutlined ?? props.outlined),
      text: newState === 'default' ? props.text : (nextText ?? props.text),
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
          {...rest}
          onClick={handleClick}
          label={async ? tempProps.current.label : props.label}
          icon={async ? tempProps.current.icon : props.icon}
          severity={async ? tempProps.current.severity : props.severity}
          raised={async ? tempProps.current.raised : props.raised}
          text={async ? tempProps.current.text : props.text}
          outlined={async ? tempProps.current.outlined : props.outlined}
          loading={_state === 'loading'}
          className={classNames(props.className, `state-${_state}`)}
      />
  )
})
