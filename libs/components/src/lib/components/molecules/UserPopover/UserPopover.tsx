import React, { useState } from 'react';
import { User } from './../User/User';
import { Popover } from './../Popover/Popover';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      content={<Content handleSignOut={handleSignOut} />}
      isOpen={isOpen}
      onChangeOpen={setIsOpen}
      positions={['bottom']}
      align={'end'}
      padding={5}
    >
      <User className={styles.user} {...user} />
    </Popover>
  );
};
