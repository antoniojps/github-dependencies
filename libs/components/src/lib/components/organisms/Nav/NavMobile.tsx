import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import styles from './NavMobile.module.scss';
import { Logo, LinkActive } from './../../atoms';
import { NavProps } from './Nav';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from './../../molecules';
import { Button, Divider, Spacer } from '@geist-ui/react';
import { Github, LogOut, LogIn } from '@geist-ui/react-icons';
import { noop } from 'lodash';

const NavMobile = ({
  links = [],
  user,
  handleSignOut = noop,
  handleSignIn = noop,
}: NavProps): ReactElement => {
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
          <a
            href="https://antoniosantos.me"
            target="_blank"
            rel="noreferrer"
            className={styles.logo}
          >
            <Logo />
          </a>
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
          <div className={styles.navMobileInner}>
            <Button type="secondary" icon={<Github />} auto>
              Github repository
            </Button>
            {links.map((item) => (
              <LinkActive
                href={item.to}
                key={item.label}
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
              >
                <a onClick={() => setOpen(false)}>{item.label}</a>
              </LinkActive>
            ))}
            <Divider />
            <div className={styles.user}>
              <AnimatePresence exitBeforeEnter initial={false}>
                {Boolean(user) && (
                  <motion.div
                    style={{ display: 'flex', alignItems: 'baseline', flexDirection: 'column' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    key="nav-user"
                  >
                    <User name={user?.name} image={user?.image} size="large" isReverse />
                    <Spacer y={1} />
                    <Button icon={<LogOut />} onClick={() => handleSignOut()}>
                      Log out
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter initial={false}>
                {!user && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    key="nav-user"
                  >
                    <Button icon={<LogIn />} type="success" onClick={() => handleSignIn('github')}>
                      Log in
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
