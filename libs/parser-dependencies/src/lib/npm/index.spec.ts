import { parsePackageJson, parser } from './';
import { packageJsonMock, packageJsonMockAlt } from '../../___mocks__/npmMocks';

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
  });

  describe('parser', () => {
    it('should return dependencies occurence data', () => {
      expect(parser([packageJsonMock, packageJsonMockAlt])).toEqual([
        { label: 'react', value: 2 },
        { label: 'react-dom', value: 1 },
        { label: '@babel/core', value: 2 },
        { label: 'peer-dependency', value: 2 },
        { label: 'react-router-dom', value: 1 },
        { label: '@babel/preset-react', value: 1 },
        { label: 'peer-dependency-alt', value: 1 },
      ]);
    });
  });
});
