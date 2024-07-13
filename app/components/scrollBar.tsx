// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
// }

// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
import React from "react";
type PropsType = {
  s?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export default function ScrollBar({ children }: PropsType) {
  return (
    <div className="flex gap-2 overflow-hidden overflow-x-scroll max-w-96 ">
      {children}
    </div>
  );
}
export function ScrollBarItem({ children }: PropsType) {
  return <div className="min-w-32 aspect-video bg-red-400">{children}</div>;
}
