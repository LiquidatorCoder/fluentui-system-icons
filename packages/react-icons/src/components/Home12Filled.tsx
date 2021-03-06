import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Home12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.3 1.1a.5.5 0 00-.6 0L1.57 4.3A1.5 1.5 0 001 5.5V10a1 1 0 001 1h2a1 1 0 001-1V7h2v3a1 1 0 001 1h2a1 1 0 001-1V5.49c0-.46-.21-.9-.58-1.18L6.31 1.1z" fill={primaryFill} /></svg>;
};

export default Home12Filled;