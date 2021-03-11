import React from 'react';
import { render } from '@testing-library/react';

import Components from './components';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components content="Hello world!" />);
    expect(baseElement).toBeTruthy();
  });
});
