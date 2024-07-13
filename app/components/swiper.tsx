"use client";
import { HtmlHTMLAttributes } from "react";
import Card from "./card";
type PropsType = {} & HtmlHTMLAttributes<HTMLDivElement>;
export default function Swiper({ children, className, ...props }: PropsType) {
  return (
    <div
      {...props}
      className={`grid grid-cols-3 gap-2 min-w-32 md:min-w-64 min-h-64 ${className}`}
    >
      {children}
    </div>
  );
}

export function SwiperCard({ children, className, ...props }: PropsType) {
  const classListBeforeClick = ["flex", "justify-center", "items-center"];
  const classListAfterClick = [
    "current-item",
    "col-start-1",
    "col-end-4",
    "row-start-2",
    "row-end-5",
    "w-full",
    "h-full",
  ];
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    // Step 1: Change Last Item
    let lastItems = document.getElementsByClassName("current-item");

    // Checking if expanded container is clicked?
    if (lastItems[0] == e.currentTarget) return;

    if (lastItems[0]) {
      let lastItemArticle = lastItems[0].lastElementChild;
      lastItemArticle && lastItemArticle.classList.add("hidden");
      let targetButtonChild = lastItems[0].firstElementChild;
      if (targetButtonChild) {
        targetButtonChild.removeAttribute("disabled");
      }
      lastItems[0].animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 500,
        iterations: 1,
      });
      lastItems[0].classList.add(...classListBeforeClick);
      lastItems[0].classList.remove(...classListAfterClick);
    }

    // Step 2: Change Current Item
    e.currentTarget.classList.add(...classListAfterClick);
    console.log(e.currentTarget.childNodes);
    let targetArticleChild = e.currentTarget.lastElementChild;
    if (targetArticleChild) {
      targetArticleChild.classList.add("md:w-[45vw]", "sm:max-w-[75vw]");
      targetArticleChild.classList.remove("hidden");
    }
    let targetButtonChild = e.currentTarget.firstElementChild;
    if (targetButtonChild) {
      targetButtonChild.setAttribute("disabled", "");
    }
    e.currentTarget.animate([{ opacity: "0" }, { opacity: "1" }], {
      // timing options
      duration: 250,
      iterations: 1,
    });
    e.currentTarget.classList.remove(...classListBeforeClick);
  }
  return (
    <Card
      {...props}
      className={`${classListBeforeClick.join(
        " "
      )} bg-orange-200 dark:bg-orange-400 ltr:border-l-5 rtl:border-r-5 ltr:border-l-orange-600 rtl:border-r-orange-600 ${className}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </Card>
  );
}
