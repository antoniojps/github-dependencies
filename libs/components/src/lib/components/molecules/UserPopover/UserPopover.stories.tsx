import React from 'react';
import { UserPopover } from './UserPopover';
import { userMock } from '../../../../__mocks__/user';

export default {
  title: 'molecules/UserPopover',
};

export const Basic = () => <UserPopover user={userMock} />;
