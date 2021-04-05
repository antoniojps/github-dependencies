import { PackageManager } from '@github-graphs/types';

export const generatePackageLink = (packageManager: PackageManager, packageName: string) => {
  switch (packageManager) {
    case 'npm': {
      return `http://npmjs.com/package/${packageName}`;
    }
    case 'composer': {
      return `https://packagist.org/packages/${packageName}`;
    }
    default: {
      return `https://www.google.com/search?q=${packageName}`;
    }
  }
};
