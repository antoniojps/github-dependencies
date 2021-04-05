import React, { ReactElement, useState, useEffect } from 'react';
import { ChartBarDependenciesEditor } from '../../organisms';
import { Container, Github, Breather, Composer, Npm } from '../../atoms';
import { User } from 'next-auth';
import { Text, Button, Spacer, Progress } from '@geist-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Dependencies.module.scss';
import { signIn } from 'next-auth/client';
import { ParserResult, DownloadHandler } from '@github-graphs/types';
import { filterTopRelatedDependencies } from '@github-graphs/parser-dependencies/filters';
import { generatePackageLink } from '@github-graphs/parser-dependencies/generators';
import { useNProgress } from '@tanem/react-nprogress';
import { useProlongedLoading } from '@github-graphs/services/hooks';
import { noop } from 'lodash';

type Props = {
  user?: User;
  data: ParserResult;
  isLoadingUser?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  handleSignIn?: typeof signIn;
  handleDownload?: DownloadHandler;
};

const Icons = {
  npm: () => <Npm />,
  composer: () => <Composer />,
};

export const Dependencies = ({
  user,
  handleSignIn,
  isLoadingUser,
  isLoading,
  isError = false,
  data = [],
  handleDownload = noop,
}: Props): ReactElement => {
  const { progress, isFinished } = useNProgress({
    isAnimating: isLoading,
  });
  const isProlongedLoading = useProlongedLoading(isLoading);
  const [showCharts, setShowCharts] = useState(false);

  // let the progress bar end before showing charts
  useEffect(() => {
    const delayProgress = setTimeout(() => setShowCharts(isFinished), 200);
    return () => {
      clearTimeout(delayProgress);
    };
  }, [isFinished]);

  const parsed = React.useMemo(() => {
    if (!data)
      return {
        hasDependencies: false,
      };
    return {
      hasDependencies: data.find((deps) => deps.data.length > 0),
      data: data.map(({ packageManager, data }) => {
        const dataFiltered =
          data.length === 0 ? [] : filterTopRelatedDependencies(data).slice(0, 10).reverse();
        return {
          packageManager,
          data,
          dataFiltered,
          ...(dataFiltered.length === 0
            ? {}
            : {
                topDependency: {
                  ...dataFiltered[dataFiltered.length - 1],
                  link: generatePackageLink(
                    packageManager,
                    dataFiltered[dataFiltered.length - 1].label
                  ),
                },
              }),
        };
      }),
    };
  }, [data]);

  const renderCharts = () => (
    <div>
      {parsed?.data.map((packageManagerData) => {
        if (packageManagerData.data.length === 0) return null;

        const Icon = Icons[packageManagerData.packageManager];
        return (
          <div>
            <article className={styles.dependencies}>
              <Text h3>
                <span>
                  <Icon />
                </span>
                <Spacer x={0.5} inline /> most used {packageManagerData.packageManager} dependencies
              </Text>
              <Text p type="secondary">
                <a href={packageManagerData.topDependency.link} target="_blank" rel="noreferrer">
                  {packageManagerData.topDependency.label}
                </a>{' '}
                is your most used {packageManagerData.packageManager} dependency! Consider
                supporting the contributors of your most used dependencies.
              </Text>
              <ChartBarDependenciesEditor
                data={packageManagerData.dataFiltered}
                isLoading={isLoading}
                isError={isError}
                username={user.name}
                title={`most used ${packageManagerData.packageManager} dependencies`}
                handleDownload={handleDownload}
              />
            </article>
            <Spacer y={4} />
          </div>
        );
      })}
      {!parsed.hasDependencies && (
        <>
          <Text h3>No repositories with package dependencies.</Text>
          <Text type="secondary" span small>
            We couldn't find any repositories with package dependencies. Please{' '}
            <a
              href="https://github.com/antoniojps/github-dependencies/issues/new/choose"
              target="_blank"
              rel="noreferrer"
            >
              open a github issue
            </a>{' '}
            if you think this should be fixed or if you're using a package manager that is not yet
            supported.
          </Text>
        </>
      )}
    </div>
  );

  const renderError = () => (
    <motion.div
      className={styles.editor}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      key="error"
    >
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
    </motion.div>
  );

  const renderLoading = () => {
    if (!isProlongedLoading) return null;
    return (
      <motion.div
        className={styles.editor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        key="loading"
      >
        <Breather>
          <Text h3>Fetching your top dependencies</Text>
          <Spacer y={0.2} />
          <Progress value={progress * 100} className={styles.progress} type="success" />
        </Breather>
      </motion.div>
    );
  };

  const renderContent = () => {
    if (user) {
      if (isError) return renderError();
      if (isLoading || !showCharts) return renderLoading();
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
