import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageBottomRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.74 2c1.2 0 2.17.92 2.25 2.1v15.65c0 1.18-.92 2.16-2.1 2.24H6.25c-1.19 0-2.16-.92-2.24-2.1V4.25C4 3.07 4.91 2.09 6.1 2h11.64zm0 1.5H6.24c-.38 0-.69.28-.74.64v15.6c0 .38.28.7.64.75h11.6c.38 0 .7-.28.75-.64V4.25c0-.38-.28-.7-.64-.75h-.1z" fill={primaryFill} /><path d="M15.02 19.9a.75.75 0 01-.62-.86l.1-.66h-1.48l-.14.9a.75.75 0 01-1.48-.24l.1-.66h-.75a.75.75 0 110-1.5h.99l.23-1.5h-.72a.75.75 0 110-1.5h.96l.2-1.26a.75.75 0 111.48.24l-.16 1.02h1.48l.2-1.26a.75.75 0 111.48.24l-.16 1.02h.52a.75.75 0 010 1.5h-.76l-.23 1.5h.49a.75.75 0 010 1.5h-.73l-.14.9a.75.75 0 01-.86.62zm-1.53-4.52l-.23 1.5h1.48l.23-1.5H13.5z" fill={primaryFill} /></svg>;
};

export default DocumentPageBottomRight24Regular;