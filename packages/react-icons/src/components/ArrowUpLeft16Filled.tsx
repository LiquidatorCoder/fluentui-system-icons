import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.75A.75.75 0 008.25 2h-5.5a.75.75 0 00-.75.75v5.5a.75.75 0 001.5 0V4.56l9.22 9.22a.75.75 0 101.06-1.06L4.56 3.5h3.69c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
};

export default ArrowUpLeft16Filled;