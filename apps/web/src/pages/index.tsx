import React, { useEffect } from 'react';
import { Dependencies, Layout } from '@github-graphs/components';
import { useSession, signOut, signIn } from 'next-auth/client';
import { useQuery } from 'react-query';
import { ParserResult } from '@github-graphs/types';
import { useDomToImageDownload } from '@github-graphs/services/hooks';

export function Index() {
  const [session, loading] = useSession();
  const { isLoading, error, data, refetch } = useQuery<ParserResult>(
    'dependencies',
    () =>
      fetch('/api/dependencies').then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.statusText);
      }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  const download = useDomToImageDownload();

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
        handleDownload={download}
      />
    </Layout>
  );
}

export default Index;
