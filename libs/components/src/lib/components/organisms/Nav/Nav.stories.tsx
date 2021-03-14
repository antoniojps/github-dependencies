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
