import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useWindowScroll } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import { NavProps } from './Nav';
import { Logo, LinkActive } from './../../atoms';
import styles from './NavDesktop.module.scss';

const NavDesktop = ({ links = [] }: NavProps): ReactElement => {
  const { y } = useWindowScroll();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.start}>
          <a
            href="https://antoniosantos.me"
            target="_blank"
            rel="noreferrer"
            className={styles.logo}
          >
            <Logo />
          </a>
          <AnimatePresence exitBeforeEnter initial={false}>
            {y < 100 && (
              <motion.div
                style={{ display: 'flex', alignItems: 'center' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                key="nav-start"
              >
                {links.map((item) => (
                  <LinkActive
                    href={item.to}
                    key={item.label}
                    activeClassName={styles.navLinkActive}
                    className={styles.navLink}
                  >
                    <a>{item.label}</a>
                  </LinkActive>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.end}>user</div>
      </div>
    </nav>
  );
};

export default NavDesktop;
