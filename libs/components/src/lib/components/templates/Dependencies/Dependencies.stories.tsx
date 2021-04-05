import React, { ReactElement } from 'react';
import { Dependencies } from './Dependencies';
import { userMock } from '../../../../__mocks__/user';
import { dependenciesDataMock } from '../../../../__mocks__/dependencies';

export default {
  title: 'templates/Dependencies',
};

export const Basic = (): ReactElement => <Dependencies data={dependenciesDataMock} />;
export const Authenticated = (): ReactElement => (
  <Dependencies user={userMock} data={dependenciesDataMock} />
);
