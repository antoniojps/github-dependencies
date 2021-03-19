import React, { ReactElement } from 'react';
import { ColorPicker } from './ColorPicker';
import { Text, Spacer } from '@geist-ui/react';

export default {
  title: 'molecules/ColorPicker',
};

export const Basic = (): ReactElement => {
  const [selectedColor, setSelectedColor] = React.useState('yellow');

  return (
    <div>
      <ColorPicker color={selectedColor} onChangeColor={setSelectedColor} />
      <Spacer y={0.5} />
      <Text h1 style={{ color: selectedColor }}>
        Change my color
      </Text>
    </div>
  );
};

export const Small = (): ReactElement => {
  const [selectedColor, setSelectedColor] = React.useState('yellow');

  return (
    <div>
      <ColorPicker color={selectedColor} onChangeColor={setSelectedColor} size="small" />
      <Spacer y={0.5} />
      <Text h1 style={{ color: selectedColor }}>
        Change my color
      </Text>
    </div>
  );
};
