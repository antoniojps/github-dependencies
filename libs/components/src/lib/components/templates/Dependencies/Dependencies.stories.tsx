import React, { ReactElement } from 'react';
import { Dependencies } from './Dependencies';
import { userMock } from '../../../../__mocks__/user';

export default {
  title: 'templates/Dependencies',
};

export const Basic = (): ReactElement => <Dependencies />;
export const Authenticated = (): ReactElement => <Dependencies user={userMock} />;
