import React, { ReactElement } from 'react';
import { Layout } from '../../organisms';
import { Container, Github } from '../../atoms';
import { User } from 'next-auth';
import { Text, Button, Spacer } from '@geist-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Dependencies.module.scss';
import { signOut, signIn } from 'next-auth/client';

type Props = {
  user?: User;
  isLoadingUser: boolean;
  handleSignOut: typeof signOut;
  handleSignIn: typeof signIn;
};

export const Dependencies = ({
  user,
  handleSignOut,
  handleSignIn,
  isLoadingUser,
}: Props): ReactElement => {
  const renderContent = () =>
    user ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        key="dependencies-graph"
      >
        <Text>Hello graph</Text>
      </motion.div>
    ) : (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        key="dependencies-login"
      >
        <Button size="large" type="secondary" onClick={() => handleSignIn('github')}>
          <Github />
          <Spacer x={0.5} inline />
          Continue with github
        </Button>
      </motion.div>
    );

  return (
    <Layout nav={{ user, handleSignOut, handleSignIn }}>
      <Container className={styles.container} shrink center>
        <Text h1>Github dependency usage graph</Text>
        <Text p>
          Understand what dependencies you use the most on your github projects
          <br />
          <Text type="secondary" span small>
            supports npm for javascript and composer for php
          </Text>
        </Text>

        <div className={styles.main}>
          <AnimatePresence exitBeforeEnter initial={true}>
            {!isLoadingUser && renderContent()}
          </AnimatePresence>
        </div>
      </Container>
    </Layout>
  );
};
