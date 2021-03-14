export type DependenciesDataItem = {
  label: string;
  value: number;
};

export type DependenciesData = DependenciesDataItem[];

export type PackageManager = 'npm' | 'composer';

export type Parser = {
  /**
  Package manager
  */
  packageManager: PackageManager;
  /**
  Dependencies files to send to parser
  */
  files: string[];
  parser: (files: unknown[]) => DependenciesData;
};

export type GithubContents = {
  name: string;
  type: 'dir' | 'file' | 'symlink' | 'submodule' | string;
  url: string;
  [key: string]: unknown;
}[];

export type FetchFileResult = {
  packageManager: PackageManager;
  file: unknown;
};

export type FetchFile = (url: string, packageManager: PackageManager) => Promise<FetchFileResult>;

export type DependenciesFileMap = {
  packageManager: PackageManager;
  url: string;
  name: string;
}[];

export type DependenciesFilesPerPackageManager = {
  packageManager: PackageManager;
  files: unknown[];
}[];
