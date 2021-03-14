import React, { ReactElement, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type LinkActiveProps = {
  activeClassName?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  href: string;
  children: ReactNode;
  className?: string;
} & LinkProps;

export const LinkActive = ({
  href,
  activeClassName,
  children,
  target,
  className: passedClassName = '',
}: LinkActiveProps): ReactElement => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const child: any = React.Children.only(children);

  let className = child?.props?.className ?? passedClassName;
  if (router?.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  if (target) {
    return (
      <Link href={href}>
        <a target={target}>{React.cloneElement(child, { className })}</a>
      </Link>
    );
  }
  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

export default LinkActive;
