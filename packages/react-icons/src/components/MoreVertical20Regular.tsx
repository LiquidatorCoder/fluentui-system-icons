import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreVertical20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 6z" fill={primaryFill} /><path d="M10 11.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill={primaryFill} /><path d="M8.75 15.25a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z" fill={primaryFill} /></svg>;
};

export default MoreVertical20Regular;