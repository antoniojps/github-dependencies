import { parseComposerJson, parser } from './';
import {
  composerJsonMock,
  composerJsonMockAlt,
  composerJsonMockThirdAlt,
} from '../../___mocks__/composerMocks';

describe('composer', () => {
  describe('parseComposerJson', () => {
    it('should return dependencies array', () => {
      expect(parseComposerJson(composerJsonMock)).toEqual([
        'php',
        'slim/slim',
        'tuupola/slim-jwt-auth',
        'vlucas/phpdotenv',
      ]);
    });

    it('should throw error on invalid schema', () => {
      expect(() => parseComposerJson({ require: 'this is invalid' } as any)).toThrowError(
        /invalid/
      );
    });
  });

  describe('parser', () => {
    it('should return dependencies occurence data', () => {
      expect(parser([composerJsonMock, composerJsonMockAlt, composerJsonMockThirdAlt])).toEqual([
        { label: 'php', value: 3 },
        { label: 'slim/slim', value: 1 },
        { label: 'tuupola/slim-jwt-auth', value: 1 },
        { label: 'vlucas/phpdotenv', value: 1 },
        { label: 'respect/validation', value: 1 },
        { label: 'laravel/framework', value: 1 },
        { label: 'beyondcode/laravel-dump-server', value: 1 },
        { label: 'phpunit/phpunit', value: 1 },
        { label: 'filp/whoops', value: 1 },
      ]);
    });
  });
});
