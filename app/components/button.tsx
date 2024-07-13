import React from "react";
type PropsType = {
  variety?: "accept" | "reject" | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({
  variety,
  className,
  children,
  ...props
}: PropsType) {
  return (
    <button
      {...props}
      type="button"
      name="change the world"
      className={" md:min-w-24 md:p-3 p-3 mx-1 md:text-lg text-md text-nowrap rounded-lg border-2 transition-all hover:font-bold disabled:bg-orange-100 dark:disabled:bg-orange-100 disabled:text-orange-400 dark:disabled:text-orange-400".concat(
        " ",
        className ?? "",
        " ",
        DetectClass(variety)
      )}
    >
      {children}
    </button>
  );
}
function DetectClass(d: PropsType["variety"]) {
  switch (d) {
    case "accept":
      return "border-green-950 hover:border-green-200 bg-green-200 hover:bg-green-950 text-green-950 hover:text-green-200";
    case "reject":
      return "border-red-600 hover:border-red-200 bg-red-200 hover:bg-red-600 text-red-600 hover:text-red-200";
    default:
      return "bg-orange-500 border-none hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-800 dark:hover:bg-orange-700 text-white dark:text-orange-400";
  }
}
