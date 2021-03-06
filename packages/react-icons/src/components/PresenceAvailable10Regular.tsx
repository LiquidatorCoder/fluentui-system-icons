import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceAvailable10Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 0a5 5 0 100 10A5 5 0 005 0zM1 5a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /><path d="M7.1 3.4c.2.2.2.5 0 .7L4.85 6.35a.5.5 0 01-.7 0l-1-1a.5.5 0 11.7-.7l.65.64 1.9-1.9c.2-.19.5-.19.7 0z" fill={primaryFill} /></svg>;
};

export default PresenceAvailable10Regular;