import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CellularData524Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 17a1 1 0 011 .98v1.04A1 1 0 014 20a1 1 0 01-1-.98v-1.04A1 1 0 014 17z" fill={primaryFill} /></svg>;
};

export default CellularData524Filled;