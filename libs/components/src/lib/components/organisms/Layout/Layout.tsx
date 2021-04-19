import React, { ReactElement, ReactNode } from 'react';
import { Nav, NavProps } from '../../organisms';

type LayoutProps = {
  nav?: NavProps;
  children: ReactNode;
};

export const Layout = ({ children, nav }: LayoutProps): ReactElement => {
  return (
    <div>
      <Nav {...nav} />
      <main>{children}</main>
      <style jsx global>{`
        html,
        body {
          background-color: #09151f;
          color: #fff;
        }
      `}</style>
    </div>
  );
};
