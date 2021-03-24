import React from 'react';
import { Dependencies, Layout } from '@github-graphs/components';
import { useSession, signOut, signIn } from 'next-auth/client';

export function Index() {
  const [session, loading] = useSession();
  return (
    <Layout nav={{ user: session?.user, handleSignOut: signOut, handleSignIn: signIn }}>
      <Dependencies
        user={session?.user}
        isLoadingUser={loading}
        handleSignIn={signIn}
        isLoading={false}
      />
    </Layout>
  );
}

export default Index;
