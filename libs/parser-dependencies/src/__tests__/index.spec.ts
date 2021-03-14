import {
  githubRepoContentsNpmMock,
  githubRepoContentsNpmAltMock,
  githubRepoContentsComposerMock,
  githubRepoContentsComposerAltMock,
} from '../___mocks__/contentsMocks';
import { dependenciesFilesMock } from '../___mocks__/dataMocks';
import { parser } from '../lib';
import { FetchFile } from '@github-graphs/types';

jest.mock('axios');
const fetchFileMock: FetchFile = (url, packageManager) => {
  const mockKey = url.includes('alt') ? `${packageManager}Alt` : packageManager;

  return Promise.resolve({
    packageManager,
    file: dependenciesFilesMock[mockKey],
  });
};

describe('index', () => {
  describe('parser', () => {
    it('parses npm dependencies', async () => {
      const parsed = await parser({
        reposContents: [githubRepoContentsNpmMock, githubRepoContentsNpmAltMock],
        fetchFile: fetchFileMock,
      });
      expect(parsed).toEqual([
        {
          packageManager: 'npm',
          data: [
            { label: 'react', value: 2 },
            { label: '@babel/core', value: 2 },
            { label: 'peer-dependency', value: 2 },
            { label: 'react-dom', value: 1 },
            { label: 'react-router-dom', value: 1 },
            { label: '@babel/preset-react', value: 1 },
            { label: 'peer-dependency-alt', value: 1 },
          ],
        },
      ]);
    });

    it('parses composer dependencies', async () => {
      const parsed = await parser({
        reposContents: [githubRepoContentsComposerMock, githubRepoContentsComposerAltMock],
        fetchFile: fetchFileMock,
      });
      expect(parsed).toEqual([
        {
          packageManager: 'composer',
          data: [
            { label: 'php', value: 2 },
            { label: 'slim/slim', value: 1 },
            { label: 'tuupola/slim-jwt-auth', value: 1 },
            { label: 'vlucas/phpdotenv', value: 1 },
            { label: 'respect/validation', value: 1 },
            { label: 'laravel/framework', value: 1 },
            { label: 'beyondcode/laravel-dump-server', value: 1 },
            { label: 'phpunit/phpunit', value: 1 },
          ],
        },
      ]);
    });

    it('parses npm and composer dependencies', async () => {
      const parsed = await parser({
        reposContents: [
          githubRepoContentsNpmMock,
          githubRepoContentsNpmAltMock,
          githubRepoContentsComposerMock,
          githubRepoContentsComposerAltMock,
        ],
        fetchFile: fetchFileMock,
      });
      expect(parsed).toEqual([
        {
          packageManager: 'npm',
          data: [
            { label: 'react', value: 2 },
            { label: '@babel/core', value: 2 },
            { label: 'peer-dependency', value: 2 },
            { label: 'react-dom', value: 1 },
            { label: 'react-router-dom', value: 1 },
            { label: '@babel/preset-react', value: 1 },
            { label: 'peer-dependency-alt', value: 1 },
          ],
        },
        {
          packageManager: 'composer',
          data: [
            { label: 'php', value: 2 },
            { label: 'slim/slim', value: 1 },
            { label: 'tuupola/slim-jwt-auth', value: 1 },
            { label: 'vlucas/phpdotenv', value: 1 },
            { label: 'respect/validation', value: 1 },
            { label: 'laravel/framework', value: 1 },
            { label: 'beyondcode/laravel-dump-server', value: 1 },
            { label: 'phpunit/phpunit', value: 1 },
          ],
        },
      ]);
    });
  });
});
