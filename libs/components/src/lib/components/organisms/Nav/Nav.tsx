import React, { ReactElement } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import styles from './Nav.module.scss';

type NavLinkProps = {
  label: string;
  to?: string;
};

export type NavProps = {
  links?: NavLinkProps[];
};

export const Nav = (props: NavProps): ReactElement => {
  return (
    <div className={styles.nav}>
      <div className={styles.navDesktop}>
        <NavDesktop {...props} />
      </div>
      <div className={styles.navMobile}>
        <NavMobile />
      </div>
    </div>
  );
};

export default Nav;
