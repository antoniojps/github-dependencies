import React from 'react';
import { User } from './../User/User';
import { Popover, usePopover } from './../Popover/Popover';
import styles from './UserPopover.module.scss';
import { signOut } from 'next-auth/client';
import { noop } from 'lodash';
import { LogOut } from '@geist-ui/react-icons';
import { Spacer } from '@geist-ui/react';

type Props = {
  user: React.ComponentProps<typeof User>;
  handleSignOut?: typeof signOut;
};

const Content = ({ handleSignOut = noop }: { handleSignOut?: typeof signOut }) => (
  <div className={styles.content}>
    <button onClick={() => handleSignOut()}>
      <LogOut size={14} />
      <Spacer x={0.5} />
      log out
    </button>
  </div>
);

export const UserPopover = ({ user, handleSignOut }: Props) => {
  const [isOpen, toggle] = usePopover(false);

  return (
    <Popover
      content={<Content handleSignOut={handleSignOut} />}
      isOpen={isOpen}
      toggle={toggle}
      positions={['bottom']}
      align={'end'}
      padding={5}
    >
      <div onClick={() => toggle}>
        <User className={styles.user} {...user} />
      </div>
    </Popover>
  );
};
