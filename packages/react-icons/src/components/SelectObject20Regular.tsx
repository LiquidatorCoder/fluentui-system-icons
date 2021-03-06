import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SelectObject20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M6 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M7 4.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7 15.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4 7.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5z" fill={primaryFill} /><path d="M15 7.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5z" fill={primaryFill} /></svg>;
};

export default SelectObject20Regular;