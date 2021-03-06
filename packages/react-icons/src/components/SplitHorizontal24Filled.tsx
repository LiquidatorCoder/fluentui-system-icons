import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 12.5a.75.75 0 000-1.5H2.75a.75.75 0 000 1.5h18.5zM17.75 2C18.99 2 20 3 20 4.25V10H4V4.25C4 3.01 5 2 6.25 2h11.5zM4 19.25V13.5h16v5.75c0 1.24-1 2.25-2.25 2.25H6.25c-1.24 0-2.25-1-2.25-2.25z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal24Filled;