import React from 'react';

import './components.module.scss';

/* eslint-disable-next-line */
type ComponentsProps = {
  content: string;
};

export function Components(props: ComponentsProps) {
  return (
    <div>
      <h1>{props.content}</h1>
    </div>
  );
}

export default Components;
