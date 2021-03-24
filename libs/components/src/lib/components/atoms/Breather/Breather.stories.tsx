import React, { ReactElement } from 'react';
import { Breather } from './Breather';
import { Text } from '@geist-ui/react';

export default {
  title: 'atoms/Breather',
};

export const Basic = (): ReactElement => (
  <Breather>
    <Text>This text should be breathing</Text>
  </Breather>
);
