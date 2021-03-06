import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDownLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 16.25c0 .41-.34.75-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v5.69L15.72 3.22a.75.75 0 111.06 1.06L5.56 15.5h5.7c.4 0 .74.34.74.75z" fill={primaryFill} /></svg>;
};

export default ArrowDownLeft20Filled;