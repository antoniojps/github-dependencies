import React from 'react';
import { render } from '@testing-library/react';
import { ChartBarDependenciesEditor } from './ChartBarDependenciesEditor';
import { chartDependenciesDataMock } from '../../../../__mocks__/dependencies';

describe('ChartBarDependenciesEditor', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ChartBarDependenciesEditor
        data={chartDependenciesDataMock}
        isLoading={false}
        username="antoniojps"
        title="chart title goes here"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders loading', () => {
    const { asFragment } = render(
      <ChartBarDependenciesEditor
        data={chartDependenciesDataMock}
        isLoading
        username="antoniojps"
        title="chart title goes here"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders error', () => {
    const { asFragment } = render(
      <ChartBarDependenciesEditor
        data={chartDependenciesDataMock}
        isError
        username="antoniojps"
        title="chart title goes here"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
