import React, { useEffect, useMemo } from 'react';
import { Dependencies, Layout } from '@github-graphs/components';
import { useSession, signOut, signIn } from 'next-auth/client';
import { useQuery } from 'react-query';
import { ParserResult } from '@github-graphs/types';
import { filterTopRelatedDependencies } from '@github-graphs/parser-dependencies/filters';

export function Index() {
  const [session, loading] = useSession();
  const { isLoading, error, data, refetch } = useQuery<ParserResult>(
    'dependencies',
    () => fetch('/api/dependencies').then((res) => res.json()),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (session) {
      refetch();
    }
  }, [session]);

  const dataParsed = useMemo(() => {
    if (!data) return [];
    const npm = data.find((d) => d.packageManager === 'npm');
    return filterTopRelatedDependencies(npm.data).slice(0, 10).reverse();
  }, [data]);

  return (
    <Layout nav={{ user: session?.user, handleSignOut: signOut, handleSignIn: signIn }}>
      <Dependencies
        user={session?.user}
        isLoadingUser={loading}
        handleSignIn={signIn}
        isLoading={isLoading}
        isError={Boolean(error)}
        data={dataParsed}
      />
    </Layout>
  );
}

export default Index;
