import React, { useState } from 'react';
import { Popover } from './Popover';
import { User } from '../';

export default {
  title: 'molecules/Popover',
};

const Content = () => <div style={{ padding: '1rem' }}>Hello how are you?</div>;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      content={Content}
      isOpen={isOpen}
      onChangeOpen={setIsOpen}
      positions={['bottom']}
      padding={5}
    >
      <User image={'https://react.geist-ui.dev/images/avatar.png'} name={'Joe'} size={'large'} />
    </Popover>
  );
};
