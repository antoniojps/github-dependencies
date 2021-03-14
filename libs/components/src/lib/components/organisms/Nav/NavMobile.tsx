import React, { ReactElement, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Cross as Hamburger } from 'hamburger-react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import styles from './NavMobile.module.scss';
import { Logo } from './../../atoms';

const NavMobile = (): ReactElement => {
  const [isOpen, setOpen] = useState(false);
  const mobileNav = useRef(null);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(mobileNav.current);
    } else {
      enableBodyScroll(mobileNav.current);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => clearAllBodyScrollLocks();
  });

  return (
    <nav className={styles.nav} ref={mobileNav}>
      <div className={styles.header}>
        <div className={styles.start}>
          <Link href="/">
            <a className={styles.logo}>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={styles.end}>
          <Hamburger
            duration={0.15}
            toggled={isOpen}
            toggle={setOpen}
            direction={'right'}
            label={isOpen ? 'Close navigation menu' : 'Show navigation menu'}
          />
        </div>
      </div>
      {isOpen && (
        <div className={styles.navMobileContent}>
          <div className={styles.navMobileInner}>hello</div>
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
