import React from 'react';
import cn from 'classnames';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
  size = 'S',
  color = 'ghost',
  href,
  className,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.tag, [styles[size]], [styles[color]])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
