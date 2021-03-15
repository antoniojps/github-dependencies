import React from 'react';
import User from './User';

export default {
  title: 'molecules/User',
};

export const Basic = () => (
  <User image={'https://react.geist-ui.dev/images/avatar.png'} name={'Joe'} size={'large'} />
);

export const WithoutImage = () => <User name="Antonio Santos" />;
