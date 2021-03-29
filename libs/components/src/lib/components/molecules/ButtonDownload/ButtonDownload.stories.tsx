import React, { ReactElement } from 'react';
import { ButtonDownload } from './ButtonDownload';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/ButtonDownload',
};

export const Basic = (): ReactElement => {
  return (
    <ButtonDownload
      onClick={(options) => {
        action('onClick');
        console.log(options);
      }}
    />
  );
};
