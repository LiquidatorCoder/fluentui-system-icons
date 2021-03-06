import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherDrizzle24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37h-.85a.76.76 0 01-.09.17l-1 1.5a.75.75 0 01-1.24-.84l.56-.83h-2.23a.75.75 0 01-.09.17l-1 1.5a.75.75 0 11-1.24-.84l.56-.83H8.46a.75.75 0 01-.09.17l-1 1.5a.75.75 0 01-1.24-.84l.56-.83a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0112 3zm0 1.5a3.86 3.86 0 00-3.88 3.89c0 .35-.32.64-.68.64h-.7c-1.25 0-2.27 1-2.27 2.23a2.26 2.26 0 002.28 2.24h10.5c1.26 0 2.28-1 2.28-2.24a2.26 2.26 0 00-2.28-2.23h-.69c-.36 0-.68-.29-.68-.64 0-2.29-1.8-3.9-3.88-3.9z" fill={primaryFill} /><path d="M7.13 18.83a.75.75 0 101.24.84l1-1.5a.75.75 0 00-1.24-.84l-1 1.5z" fill={primaryFill} /><path d="M11.33 19.87a.75.75 0 01-.2-1.04l1-1.5a.75.75 0 111.24.84l-1 1.5a.75.75 0 01-1.04.2z" fill={primaryFill} /></svg>;
};

export default WeatherDrizzle24Regular;