import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Location16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a6 6 0 016 6c0 2.87-1.94 5.5-5.73 7.92a.5.5 0 01-.54 0C3.93 12.51 2 9.87 2 7a6 6 0 016-6zm0 4a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
};

export default Location16Filled;