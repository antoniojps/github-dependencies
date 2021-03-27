import React, { ReactElement } from 'react';
import { ButtonOptions } from './ButtonOptions';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/ButtonOptions',
};

export const Basic = (): ReactElement => (
  <ButtonOptions onClick={action('onClick')} onClickOptions={action('onClickOptions')}>
    Download
  </ButtonOptions>
);
