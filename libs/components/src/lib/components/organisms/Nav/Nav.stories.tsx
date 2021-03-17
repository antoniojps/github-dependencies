import React, { ReactElement } from 'react';
import Nav from './Nav';

export default {
  title: 'organisms/Nav',
};

const links = [
  {
    label: 'dependency usage graph',
    to: '/',
  },
  {
    label: 'other tool',
    to: '/other',
  },
];

export const Public = (): ReactElement => <Nav links={links} />;
export const WithUser = (): ReactElement => (
  <Nav
    links={links}
    user={{ image: 'https://react.geist-ui.dev/images/avatar.png', name: 'Joe', size: 'large' }}
  />
);
