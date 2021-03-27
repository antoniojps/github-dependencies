import React, { useState, useEffect } from 'react';
import styles from './ColorPicker.module.scss';
import { Popover, usePopover } from '../';
import { SketchPicker, RGBColor } from 'react-color';
import { parseToRgb, rgbToColorString } from 'polished';
import { noop } from 'lodash';
import classNames from 'classnames';

type ColorPickerProps = {
  /* Selected color  */
  color: string;
  size?: 'medium' | 'small';
  onChangeColor?: (color: string) => void;
};

function parseToRGBColor(color: string) {
  const parsed = parseToRgb(color);
  const alpha = 'alpha' in parsed ? parsed.alpha : 1;

  return {
    a: alpha,
    b: parsed.blue,
    g: parsed.green,
    r: parsed.red,
  };
}

function parseToColorString(color: RGBColor) {
  const converted = {
    blue: color.b,
    red: color.r,
    green: color.g,
    alpha: 'a' in color ? color.a : 1,
  };

  return rgbToColorString(converted);
}

export const ColorPicker = ({ color, onChangeColor = noop, size = 'medium' }: ColorPickerProps) => {
  const [isOpen, toggle] = usePopover(false);
  const [pickedRgb, setPickedRgb] = useState<RGBColor>(parseToRGBColor(color));

  useEffect(() => {
    setPickedRgb(parseToRGBColor(color));
  }, [color]);

  const handleChangeComplete = (rgb: RGBColor) => {
    const colorString = parseToColorString(rgb);
    onChangeColor(colorString);
  };

  return (
    <div>
      <Popover
        content={
          <SketchPicker
            color={pickedRgb}
            onChange={(color) => setPickedRgb(color.rgb)}
            onChangeComplete={(color) => handleChangeComplete(color.rgb)}
          />
        }
        isOpen={isOpen}
        toggle={toggle}
        positions={['bottom']}
        align={'start'}
        padding={5}
      >
        <div
          className={classNames(styles.picker, { [styles.small]: size === 'small' })}
          style={{ backgroundColor: parseToColorString(pickedRgb) }}
          role="button"
        />
      </Popover>
    </div>
  );
};
