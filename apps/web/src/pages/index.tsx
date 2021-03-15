import React from 'react';
import { Container, Nav } from '@github-graphs/components';
import { Text } from '@geist-ui/react';
import { useSession, signOut, signIn } from 'next-auth/client';

export function Index() {
  const [session] = useSession();

  return (
    <>
      <Nav
        links={[
          {
            label: 'dependency usage graph',
            to: '/',
          },
        ]}
        user={session?.user}
        handleSignIn={signIn}
        handleSignOut={signOut}
      />
      <Container shrink center>
        <Text h1 style={{ fontSize: 'var(--size-xl5)' }}>
          Github dependency usage graph
        </Text>
      </Container>
    </>
  );
}

export default Index;
