import React, { ReactElement } from 'react';
import { ChartBarDependenciesEditor } from '../../organisms';
import { Container, Github, Breather } from '../../atoms';
import { User } from 'next-auth';
import { Text, Button, Spacer, Progress } from '@geist-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Dependencies.module.scss';
import { signIn } from 'next-auth/client';
import { ParserResult } from '@github-graphs/types';
import { filterTopRelatedDependencies } from '@github-graphs/parser-dependencies/filters';
import { generatePackageLink } from '@github-graphs/parser-dependencies/generators';
import { useNProgress } from '@tanem/react-nprogress';

type Props = {
  user?: User;
  data: ParserResult;
  isLoadingUser: boolean;
  isLoading: boolean;
  isError?: boolean;
  handleSignIn: typeof signIn;
};

export const Dependencies = ({
  user,
  handleSignIn,
  isLoadingUser,
  isLoading,
  isError = false,
  data = [],
}: Props): ReactElement => {
  const { progress } = useNProgress({
    isAnimating: isLoading,
  });

  const dataParsed = React.useMemo(() => {
    if (!data) return [];
    return data.map(({ packageManager, data }) => {
      const dataFiltered = filterTopRelatedDependencies(data).slice(0, 10).reverse();
      return {
        packageManager,
        data,
        dataFiltered,
        topDependency: {
          ...dataFiltered[dataFiltered.length - 1],
          link: generatePackageLink(packageManager, dataFiltered[dataFiltered.length - 1].label),
        },
      };
    });
  }, [data]);

  const renderCharts = () =>
    dataParsed.map((packageManagerData) => {
      if (packageManagerData.data.length === 0) return null;
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          key="dependencies-graph"
        >
          <article className={styles.dependencies}>
            <Text h3>most used {packageManagerData.packageManager} dependencies</Text>
            <Text p type="secondary">
              <a href={packageManagerData.topDependency.link} target="_blank" rel="noreferrer">
                {packageManagerData.topDependency.label}
              </a>{' '}
              is your most used {packageManagerData.packageManager} dependency! Consider supporting
              the contributors of your most used dependencies.
            </Text>
            <ChartBarDependenciesEditor
              data={packageManagerData.dataFiltered}
              isLoading={isLoading}
              isError={isError}
            />
          </article>
          <Spacer y={4} />
        </motion.div>
      );
    });

  const renderError = () => (
    <div className={styles.messageContainer}>
      <Text h3>Something went wrong...</Text>
      <Text type="secondary" span small>
        Maybe we've reached Github's API limit or we couldn't find any repositories with package
        dependencies. Please{' '}
        <a
          href="https://github.com/antoniojps/github-dependencies/issues/new/choose"
          target="_blank"
          rel="noreferrer"
        >
          open a github issue
        </a>{' '}
        if you think this should be fixed.
      </Text>
    </div>
  );
  const renderLoading = () => (
    <div className={styles.messageContainer}>
      <Breather>
        <Text h3>Fetching your top dependencies</Text>
        <Spacer y={0.2} />
        <Progress value={progress * 100} className={styles.progress} type="success" />
      </Breather>
    </div>
  );

  const renderContent = () => {
    if (user) {
      if (isError) return renderError();
      if (isLoading) return renderLoading();
      return renderCharts();
    }
    return (
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
  };

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
