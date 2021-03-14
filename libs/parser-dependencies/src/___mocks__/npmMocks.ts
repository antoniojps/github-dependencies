import { PackageJson } from '@github-graphs/types';

export const packageJsonMock: PackageJson = {
  name: 'mock',
  version: '0.0.0',
  license: 'MIT',
  scripts: {
    build: 'npm build',
  },
  private: true,
  dependencies: {
    react: '17.0.1',
    'react-dom': '17.0.1',
  },
  devDependencies: {
    '@babel/core': '7.9.6',
  },
  peerDependencies: {
    'peer-dependency': '1.0.0',
  },
};

export const packageJsonMockAlt: PackageJson = {
  name: 'mock-alt',
  version: '0.0.0',
  license: 'MIT',
  scripts: {
    build: 'npm build',
  },
  private: true,
  dependencies: {
    react: '17.0.1',
    'react-router-dom': '14.0.1',
  },
  devDependencies: {
    '@babel/core': '7.9.6',
    '@babel/preset-react': '7.9.4',
  },
  peerDependencies: {
    'peer-dependency': '1.0.0',
    'peer-dependency-alt': '1.0.0',
  },
};

export const packageJsonMockThirdAlt: PackageJson = {
  name: 'mock-alt',
  version: '0.0.0',
  license: 'MIT',
  scripts: {
    build: 'npm build',
  },
  private: true,
  dependencies: {
    react: '17.0.1',
  },
};
