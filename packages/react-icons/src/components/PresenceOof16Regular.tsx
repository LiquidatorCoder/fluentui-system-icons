import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceOof16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.2 6.2a1 1 0 10-1.4-1.4L4.3 7.3a1 1 0 000 1.4l2.5 2.5a1 1 0 001.4-1.4L7.42 9H11a1 1 0 100-2H7.41l.8-.8z" fill={primaryFill} /><path d="M8 0a8 8 0 100 16A8 8 0 008 0zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill={primaryFill} /></svg>;
};

export default PresenceOof16Regular;