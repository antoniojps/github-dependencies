import { ComposerJson } from '@github-graphs/types';

export const composerJsonMock: ComposerJson = {
  name: 'mock-composer',
  description: 'mocked composer json file',
  require: {
    php: '^7.1.3',
    'slim/slim': '^3.0',
    'tuupola/slim-jwt-auth': '^2.3',
    'vlucas/phpdotenv': '^2.4',
  },
};

export const composerJsonMockAlt: ComposerJson = {
  name: 'laravel/laravel',
  description: 'The Laravel Framework.',
  keywords: ['framework', 'laravel'],
  license: 'MIT',
  type: 'project',
  require: {
    'respect/validation': '^1.1',
    php: '^7.1.3',
    'laravel/framework': '5.7.*',
  },
  'require-dev': {
    'beyondcode/laravel-dump-server': '^1.0',
    'phpunit/phpunit': '^7.0',
  },
  autoload: {
    classmap: ['database/seeds', 'database/factories'],
    'psr-4': {
      'App\\': 'app/',
    },
  },
  'autoload-dev': {
    'psr-4': {
      'Tests\\': 'tests/',
    },
  },
  extra: {
    laravel: {
      'dont-discover': [],
    },
  },
  scripts: {
    'post-root-package-install': [
      "@php -r \"file_exists('.env') || copy('.env.example', '.env');\"",
    ],
    'post-create-project-cmd': ['@php artisan key:generate --ansi'],
    'post-autoload-dump': [
      'Illuminate\\Foundation\\ComposerScripts::postAutoloadDump',
      '@php artisan package:discover --ansi',
    ],
  },
  config: {
    'preferred-install': 'dist',
    'sort-packages': true,
    'optimize-autoloader': true,
  },
  'minimum-stability': 'dev',
  'prefer-stable': true,
};

export const composerJsonMockThirdAlt: ComposerJson = {
  name: 'mock-composer third alt',
  description: 'mocked composer json file',
  require: {
    php: '^7.1.3',
  },
  'require-dev': {
    'filp/whoops': '~2.0',
  },
};
