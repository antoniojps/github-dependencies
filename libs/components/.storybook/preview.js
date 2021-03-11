import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withNextRouter } from 'storybook-addon-next-router';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { Theme } from './../src';
import './../src/lib/containers/Theme/Theme.scss';

const Providers = (storyFn) => <Theme>{storyFn()}</Theme>;

addDecorator(withPropsTable);
addDecorator(withSmartKnobs());
addDecorator(withA11y);
addDecorator(withNextRouter);
addDecorator(Providers);

export const parameters = {
  layout: 'fullscreen',
};
