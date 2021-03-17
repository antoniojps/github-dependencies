import React, { ReactElement } from 'react';
import { Layout } from './Layout';
import { userMock } from '../../../../__mocks__/user';
import { Container } from '../../atoms';

export default {
  title: 'organisms/Layout',
};

export const Basic = (): ReactElement => (
  <Layout nav={{ user: userMock }}>
    <Container>
      <h1>Hello layout!</h1>
    </Container>
  </Layout>
);
