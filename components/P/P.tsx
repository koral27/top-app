import React from 'react';
import cn from 'classnames';
import { PProps } from './P.props';
import styles from './P.module.css';

export const P = ({
  size = 'M',
  className,
  children,
  ...props
}: PProps): JSX.Element => {
  return (
    <p className={cn(className, styles.p, [styles[size]])} {...props}>
      {children}
    </p>
  );
};
