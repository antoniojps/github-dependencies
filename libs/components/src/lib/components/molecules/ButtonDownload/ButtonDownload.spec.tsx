import React from 'react';
import { render } from '@testing-library/react';
import { noop } from 'lodash';

import { ButtonDownload } from './ButtonDownload';
import { ButtonDownloadOptions } from './ButtonDownloadOptions';

describe('ButtonDownload', () => {
  it('renders', () => {
    const { asFragment } = render(<ButtonDownload onClick={noop} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ButtonDownloadOptions', () => {
    const { asFragment } = render(<ButtonDownloadOptions onChange={noop} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
