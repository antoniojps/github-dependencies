import React, { ReactElement } from 'react';
import { ChartBarDependenciesEditor } from './ChartBarDependenciesEditor';
import { Container } from './../../atoms';
import { addDecorator } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { chartDependenciesDataMock } from '../../../../__mocks__/dependencies';

export default {
  title: 'organisms/ChartBarDependenciesEditor',
};

addDecorator(withSmartKnobs({ ignoreProps: ['isLoading', 'isError'] }));

export const Basic = (): ReactElement => (
  <Container center shrink>
    <div style={{ height: '10px', width: '100%' }} />
    <ChartBarDependenciesEditor
      data={chartDependenciesDataMock}
      isLoading={boolean('isLoading', false)}
      isError={boolean('isError', false)}
    />
  </Container>
);

export const IsLoading = (): ReactElement => (
  <Container center shrink>
    <div style={{ height: '10px', width: '100%' }} />
    <ChartBarDependenciesEditor data={chartDependenciesDataMock} isLoading={true} />
  </Container>
);

export const IsError = (): ReactElement => (
  <Container center shrink>
    <div style={{ height: '10px', width: '100%' }} />
    <ChartBarDependenciesEditor data={chartDependenciesDataMock} isLoading={false} isError />
  </Container>
);
