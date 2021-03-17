import React, { ReactElement } from 'react';
import { Avatar } from '@geist-ui/react';
import styles from './User.module.scss';
import classNames from 'classnames';
import { capitalize } from 'lodash';

export type Props = {
  name: string;
  image?: string | null;
  hasName?: boolean;
  isReverse?: boolean;
  size?: 'large';
  className?: string;
};

export const User = ({
  name,
  image,
  hasName = true,
  isReverse = false,
  size,
  className = '',
}: Props): ReactElement => {
  const [firstLetter] = name.split('');

  return (
    <span
      className={classNames(styles.user, {
        [styles.userReverse]: isReverse,
        [className]: Boolean(className),
      })}
    >
      {hasName && (
        <span
          className={classNames(styles.userName, {
            ...(size ? { [styles[`user${capitalize(size)}`]]: true } : {}),
          })}
        >
          {name}
        </span>
      )}
      <Avatar src={image || undefined} text={firstLetter} />
    </span>
  );
};

export default User;
