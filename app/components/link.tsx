import L, { LinkProps } from "next/link";
import React from "react";
type PropsType = {} & React.ButtonHTMLAttributes<HTMLAnchorElement> & LinkProps;

export default function Link({ children, className, ...props }: PropsType) {
  return (
    <L
      {...props}
      className={`text-blue-800 hover:text-black bg-white bg-opacity-20 p-1 rounded-sm transition-colors underline underline-offset-4 ${className}`}
    >
      {children}
      <span className="text-sm">🔗</span>
    </L>
  );
}
