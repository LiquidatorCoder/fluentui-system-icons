import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Target20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-4a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z" fill={primaryFill} /></svg>;
};

export default Target20Regular;