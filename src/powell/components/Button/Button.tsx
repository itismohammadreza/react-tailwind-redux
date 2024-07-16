import { memo, MouseEvent, useCallback, useState } from "react";
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
    onStateChange
  } = props;
  const [_state, _setState] = useState<ButtonState>(state);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (async) {
      onClickAsync?.({event, loadingCallback: removeLoading});
      _setState('loading');
      onStateChange?.('loading');
    } else {
      onClick?.(event);
    }
  }, [])

  const removeLoading = useCallback((toggleState?: boolean) => {
    _setState(toggleState ? 'next' : 'default');
  }, [])

  return (
      <PrimeButton
          {...props}
          onClick={handleClick}
          label={async ? (['default', 'loading'].includes(_state) ? props.label : (nextLabel ?? props.label)) : props.label}
          icon={async ? (['default', 'loading'].includes(_state) ? props.icon : (nextIcon ?? props.icon)) : props.icon}
          severity={async ? (['default', 'loading'].includes(_state) ? props.severity : (nextSeverity ?? props.severity)) : props.severity}
          raised={async ? (['default', 'loading'].includes(_state) ? props.raised : (nextRaised ?? props.raised)) : props.raised}
          text={async ? (['default', 'loading'].includes(_state) ? props.text : (nextText ?? props.text)) : props.text}
          outlined={async ? (['default', 'loading'].includes(_state) ? props.outlined : (nextOutlined ?? props.outlined)) : props.outlined}
          loading={_state === 'loading'}
          className={classNames(props.className, `state-${_state}`)}
      />
  )
})
