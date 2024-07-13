"use client";
type PropsType = {} & React.HTMLAttributes<HTMLDivElement>;

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SwitchButton from "./button.switch";

export function ThemeSwitcher(props: PropsType) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div {...props}>
      <SwitchButton
        currentState={theme || "dark"}
        firstState={"dark"}
        firstStateText={<>&#127770;</>}
        secondState={"light"}
        secondStateText={<>&#127774;</>}
        switchHandler={(s) => setTheme(s)}
        className="dark:bg-gray-500 dark:border-orange-400 bg-orange-400 bg-opacity-50 border-orange-400"
      ></SwitchButton>
    </div>
  );
}
// theme == "light" ? <>&#127774;</> : <>&#127770;</>;
