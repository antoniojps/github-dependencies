const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)']
);

rootMain.addons.push(
  ...[
    '@storybook/preset-scss',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    'storybook-addon-react-docgen',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ]
);

module.exports = rootMain;
