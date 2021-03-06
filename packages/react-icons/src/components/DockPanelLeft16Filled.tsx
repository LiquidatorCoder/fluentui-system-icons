import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DockPanelLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 9V4h5a1 1 0 011 1v6a1 1 0 01-1 1H7z" fill={primaryFill} /></svg>;
};

export default DockPanelLeft16Filled;