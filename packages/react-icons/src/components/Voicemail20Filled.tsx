import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Voicemail20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M12 10a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm7 4a2 2 0 00-.27-1h2.54A2 2 0 1013 8H7a2 2 0 102 2z" fill={primaryFill} /></svg>;
};

export default Voicemail20Filled;