import React from 'react';
import { Container, Nav } from '@github-graphs/components';
import { Text } from '@geist-ui/react';

export function Index() {
  return (
    <>
      <Nav
        links={[
          {
            label: 'dependency usage graph',
            to: '/',
          },
        ]}
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
