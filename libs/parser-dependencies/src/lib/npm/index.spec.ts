import { parsePackageJson, parser } from './';
import {
  packageJsonMock,
  packageJsonMockAlt,
  packageJsonMockThirdAlt,
} from '../../___mocks__/npmMocks';

describe('npm', () => {
  describe('parsePackageJson', () => {
    it('should return dependencies array', () => {
      expect(parsePackageJson(packageJsonMock)).toEqual([
        'react',
        'react-dom',
        '@babel/core',
        'peer-dependency',
      ]);
    });

    it('should throw error on invalid schema', () => {
      expect(() => parsePackageJson({ dependencies: 'this is invalid' } as any)).toThrowError(
        /invalid/
      );
    });
  });

  describe('parser', () => {
    it('should return dependencies occurence data', () => {
      expect(parser([packageJsonMock, packageJsonMockAlt, packageJsonMockThirdAlt])).toEqual([
        { label: 'react', value: 3 },
        { label: '@babel/core', value: 2 },
        { label: 'peer-dependency', value: 2 },
        { label: 'react-dom', value: 1 },
        { label: 'react-router-dom', value: 1 },
        { label: '@babel/preset-react', value: 1 },
        { label: 'peer-dependency-alt', value: 1 },
      ]);
    });
  });
});
