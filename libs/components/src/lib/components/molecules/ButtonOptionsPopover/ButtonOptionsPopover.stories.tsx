import React, { ReactElement } from 'react';
import { ButtonOptionsPopover } from './ButtonOptionsPopover';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/ButtonOptionsPopover',
};

const Content = () => <div style={{ padding: '1rem' }}>Hello how are you?</div>;

export const Basic = (): ReactElement => (
  <ButtonOptionsPopover onClick={action('onClick')} content={<Content />}>
    Download
  </ButtonOptionsPopover>
);
