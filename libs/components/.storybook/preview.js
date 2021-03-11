import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withNextRouter } from 'storybook-addon-next-router';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(withPropsTable);
addDecorator(withSmartKnobs());
addDecorator(withA11y);
addDecorator(withNextRouter);
