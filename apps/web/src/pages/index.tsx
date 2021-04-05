import React, { useEffect } from 'react';
import { Dependencies, Layout } from '@github-graphs/components';
import { useSession, signOut, signIn } from 'next-auth/client';
import { useQuery } from 'react-query';
import { ParserResult } from '@github-graphs/types';

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

  return (
    <Layout nav={{ user: session?.user, handleSignOut: signOut, handleSignIn: signIn }}>
      <Dependencies
        user={session?.user}
        isLoadingUser={loading}
        handleSignIn={signIn}
        isLoading={isLoading}
        isError={Boolean(error)}
        data={data}
      />
    </Layout>
  );
}

export default Index;
