import React from 'react';
import { Dependencies } from '@github-graphs/components';
import { useSession, signOut, signIn } from 'next-auth/client';

export function Index() {
  const [session, loading] = useSession();

  return (
    <Dependencies
      user={session?.user}
      isLoadingUser={loading}
      handleSignIn={signIn}
      handleSignOut={signOut}
    />
  );
}

export default Index;
