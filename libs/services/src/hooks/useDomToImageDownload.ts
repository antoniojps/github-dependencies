import domToImage from 'dom-to-image';
import { DownloadHandler, DownloadOptions } from '@github-graphs/types';

const download = (options: DownloadOptions, dataUrl: string) => {
  const link = document.createElement('a');
  link.download = `${options.name || 'dependencies'}.${options.format.toLowerCase()}`;
  link.href = dataUrl;
  link.click();
};

export function useDomToImageDownload() {
  const downloadHandler: DownloadHandler = (options, ref) => {
    const scale = parseFloat(options.size);
    const width = ref.offsetWidth * scale;
    const height = ref.offsetHeight * scale;

    const imageOptions = {
      width: width,
      height: height + 10 * scale,
      style: {
        transform: `scale(${scale})`,
        'transform-origin': 'top left',
      },
      bgcolor: options.backgroundColor,
    };

    switch (options.format) {
      case 'svg': {
        domToImage
          .toSvg(ref, imageOptions)
          .then((dataUrl) => download(options, dataUrl))
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        break;
      }
      case 'png': {
        domToImage
          .toPng(ref, imageOptions)
          .then((dataUrl) => download(options, dataUrl))
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        break;
      }
      default: {
        domToImage
          .toJpeg(ref, imageOptions)
          .then((dataUrl) => download(options, dataUrl))
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        break;
      }
    }
  };

  return downloadHandler;
}
