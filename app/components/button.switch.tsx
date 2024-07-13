"use client";

import { useState } from "react";

type PropsType = {
  currentState: string | "";
  firstState?: string | "";
  firstStateText?: React.ReactNode;
  secondState?: string | "";
  secondStateText?: React.ReactNode;
  switchHandler: (s: any) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function SwitchButton({
  currentState,
  firstState,
  firstStateText,
  secondState,
  secondStateText,
  switchHandler,
  className,
  children,
  ...props
}: PropsType) {
  function handleClick(e: React.MouseEvent<HTMLSpanElement>) {
    switchHandler(currentState == firstState ? secondState : firstState);

    e.currentTarget.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 200,
      iterations: 1,
    });
  }
  return (
    <span
      {...props}
      onClick={handleClick}
      className={`rounded-full sm:w-20 sm:h-9 flex w-9 h-20 sm:flex-col md:items-center cursor-pointer transition-all ease-out border-2 ${
        currentState == firstState ? "justify-start" : "justify-end"
      } ${className}`}
    >
      <span
        className={`rounded-full md:h-full w-full md:w-auto aspect-square transition-all ease-out flex justify-center items-center border-2  border-b-inherit md:border-b-white md:border-r-inherit dark:border-black dark:border-t-inherit dark:md:border-t-black dark:md:border-l-inherit ${
          currentState == firstState
            ? "md:ml-12 md:mt-0 mt-12"
            : "md:mr-12 md:mb-0 mb-12"
        }`}
      >
        {currentState == firstState ? (
          <span>{firstStateText}</span>
        ) : (
          <span>{secondStateText}</span>
        )}
      </span>
    </span>
  );
}
