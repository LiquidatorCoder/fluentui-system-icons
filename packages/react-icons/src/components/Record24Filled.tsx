import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Record24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm10 6a6 6 0 100-12 6 6 0 000 12z" fill={primaryFill} /></svg>;
};

export default Record24Filled;