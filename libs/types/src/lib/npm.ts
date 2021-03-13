import { PackageJson as PackageJsonTypeFest } from 'type-fest';

export type PackageJson = PackageJsonTypeFest & {
  [key: string]: unknown;
};
