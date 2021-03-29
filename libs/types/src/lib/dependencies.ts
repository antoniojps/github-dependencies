import { ColorSchemeId } from '@nivo/colors';

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

export type ParserParams = {
  reposContents: GithubContents[];
  fetchFile: FetchFile;
  packageManagersMap?: Parser[];
};

export type ParserResult = {
  packageManager: PackageManager;
  data: DependenciesData;
}[];

export type ChartBarDependenciesProps = {
  data: DependenciesData;
  colorScheme: ColorSchemeId;
  gridColor?: string;
  enableGrid?: boolean;
};

export type DownloadOptions = {
  name?: string;
  size?: '2x' | '1x';
  format?: 'svg' | 'png' | 'jpg';
};
