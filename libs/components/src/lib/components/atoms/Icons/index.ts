export type IconProps = {
  height?: number;
};

export const getWidth = (originalWidth: number, originalHeight: number, currentHeight: number) =>
  Math.round(currentHeight * (originalWidth / originalHeight));

export * from './Github';
export * from './Npm';
export * from './Composer';
