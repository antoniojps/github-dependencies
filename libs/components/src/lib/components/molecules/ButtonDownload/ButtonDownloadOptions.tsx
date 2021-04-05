import React, { useReducer } from 'react';
import styles from './ButtonDownload.module.scss';
import classNames from 'classnames';
import { useDebounce } from 'react-use';
import { DownloadOptions } from '@github-graphs/types';

type ButtonDownloadOptionsProps = {
  initialOptions?: DownloadOptions;
  onChange: (options: DownloadOptions) => void;
};

export const defaultOptions: DownloadOptions = {
  name: '',
  size: '2x',
  format: 'png',
};

const SIZES: DownloadOptions['size'][] = ['1x', '2x'];
const FORMATS: DownloadOptions['format'][] = ['svg', 'jpeg', 'png'];

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_SIZE'; payload: DownloadOptions['size'] }
  | { type: 'SET_FORMAT'; payload: DownloadOptions['format'] };

function reducer(options: DownloadOptions, action: Action): DownloadOptions {
  switch (action.type) {
    case 'SET_NAME':
      return { ...options, name: action.payload };
    case 'SET_SIZE':
      return { ...options, size: action.payload };
    case 'SET_FORMAT':
      return { ...options, format: action.payload };
    default:
      throw new Error();
  }
}

export const ButtonDownloadOptions = ({ initialOptions, onChange }: ButtonDownloadOptionsProps) => {
  const [state, dispatch] = useReducer(reducer, initialOptions);

  useDebounce(
    () => {
      onChange(state);
    },
    200,
    [state]
  );

  return (
    <div className={styles.options}>
      <div className={`${styles.name} ${styles.option}`}>
        <label>name</label>
        <input
          type="text"
          placeholder="dependencies"
          name="name"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        />
      </div>

      <div className={`${styles.buttonOptions} ${styles.option}`}>
        <label>size</label>
        <div className={styles.buttons}>
          {SIZES.map((size) => (
            <button
              key={size}
              className={classNames({ [styles.buttonOptionsDisabled]: state.size !== size })}
              onClick={() => dispatch({ type: 'SET_SIZE', payload: size })}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className={`${styles.buttonOptions} ${styles.option}`}>
        <label>format</label>
        <div className={styles.buttons}>
          {FORMATS.map((format) => (
            <button
              key={format}
              className={classNames({ [styles.buttonOptionsDisabled]: state.format !== format })}
              onClick={() => dispatch({ type: 'SET_FORMAT', payload: format })}
            >
              {format}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

ButtonDownloadOptions.defaultProps = {
  initialOptions: defaultOptions,
};
