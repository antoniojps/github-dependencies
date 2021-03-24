import React, { ReactElement } from 'react';
import { ChartBarDependenciesEditor } from '../../organisms';
import { Container, Github } from '../../atoms';
import { User } from 'next-auth';
import { Text, Button, Spacer } from '@geist-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Dependencies.module.scss';
import { signIn } from 'next-auth/client';

type Props = {
  user?: User;
  isLoadingUser: boolean;
  isLoading: boolean;
  handleSignIn: typeof signIn;
};

const data = [
  { label: 'mongoose', value: 2 },
  { label: 'query-string', value: 4 },
  { label: 'prop-types', value: 8 },
  { label: 'dotenv', value: 9 },
  { label: 'husky', value: 9 },
  { label: 'typescript', value: 10 },
  { label: 'graphql', value: 10 },
  { label: 'axios', value: 10 },
  { label: 'eslint', value: 13 },
  { label: 'react', value: 16 },
];

export const Dependencies = ({
  user,
  handleSignIn,
  isLoadingUser,
  isLoading,
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
        <ChartBarDependenciesEditor data={data} isLoading={isLoading} />
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
  );
};
