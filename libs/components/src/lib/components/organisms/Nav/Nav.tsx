import React, { ReactElement } from 'react';
import { User } from 'next-auth';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import styles from './Nav.module.scss';
import { signOut, signIn } from 'next-auth/client';

type NavLinkProps = {
  label: string;
  to?: string;
};

export type NavProps = {
  links?: NavLinkProps[];
  user?: User;
  handleSignIn?: typeof signIn;
  handleSignOut?: typeof signOut;
};

export const Nav = (props: NavProps): ReactElement => {
  return (
    <div className={styles.nav}>
      <div className={styles.navDesktop}>
        <NavDesktop {...props} />
      </div>
      <div className={styles.navMobile}>
        <NavMobile {...props} />
      </div>
    </div>
  );
};

export default Nav;
