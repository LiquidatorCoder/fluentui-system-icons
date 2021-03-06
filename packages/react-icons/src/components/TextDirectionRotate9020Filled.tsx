import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionRotate9020Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6.5c0-.3-.19-.58-.47-.7l-7.5-3a.75.75 0 00-.56 1.4l2.03.8v3l-2.03.8a.75.75 0 00.56 1.4l7.5-3a.75.75 0 00.47-.7zm-2.77 0L12 7.4V5.6l2.23.9z" fill={primaryFill} /><path d="M5 3.75a.75.75 0 011.5 0v10.69l.72-.72a.75.75 0 011.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72V3.75z" fill={primaryFill} /><path d="M13 10.75a.75.75 0 011.5 0v3.69l.72-.72a.75.75 0 111.06 1.06l-2 2a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72v-3.69z" fill={primaryFill} /></svg>;
};

export default TextDirectionRotate9020Filled;