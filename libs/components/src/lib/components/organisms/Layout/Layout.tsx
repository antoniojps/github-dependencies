import React, { ReactElement, ReactNode } from 'react';
import { Nav, NavProps } from '../../organisms';

type LayoutProps = {
  nav?: NavProps;
  children: ReactNode;
};

export const Layout = ({ children, nav }: LayoutProps): ReactElement => {
  return (
    <>
      <Nav
        links={[
          {
            label: 'dependency usage graph',
            to: '/',
          },
        ]}
        {...nav}
      />
      <main>{children}</main>
    </>
  );
};
