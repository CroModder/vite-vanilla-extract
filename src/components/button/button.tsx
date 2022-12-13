import clsx from 'clsx';
import * as React from 'react';
import { styles, red, green, blue } from './button.css';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, ...restProps }, forwardedRef) => {
  return (
    <button
      className={clsx(styles, red, blue, green, className)}
      ref={forwardedRef}
      {...restProps}
    />
  );
});

Button.displayName = 'Button';
