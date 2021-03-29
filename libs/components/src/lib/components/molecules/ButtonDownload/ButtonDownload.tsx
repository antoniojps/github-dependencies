import React, { useState } from 'react';
import { ButtonOptionsPopover } from '../ButtonOptionsPopover/ButtonOptionsPopover';
import { ButtonDownloadOptions, defaultOptions } from './ButtonDownloadOptions';
import { DownloadOptions } from '@github-graphs/types';

type ButtonDownloadProps = {
  onClick: (options: DownloadOptions) => void;
  options?: DownloadOptions;
};

export const ButtonDownload = ({ onClick, options = defaultOptions }: ButtonDownloadProps) => {
  const [downloadOptions, setDownloadOptions] = useState(options);

  return (
    <ButtonOptionsPopover
      onClick={() => onClick(downloadOptions)}
      content={<ButtonDownloadOptions onChange={setDownloadOptions} />}
    >
      Download
    </ButtonOptionsPopover>
  );
};
