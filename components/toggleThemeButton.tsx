import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { Flex, Text } from "@tremor/react";

const ToggleThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setTheme(currentTheme);
  }, []);
  return (
    <button
      type="button"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="relative bg-dark-tremor-background dark:bg-tremor-background hover:bg-dark-tremor-background-subtle dark:hover:bg-tremor-background-subtle transition-all duration-100 text-tremor-brand-muted dark:text-tremor-brand w-16 h-8 text-lg md:text-xl rounded-lg overflow-hidden"
    >
      <Flex
        justifyContent="center"
        className={`w-0 h-full ${
          theme == "dark" && "w-full"
        } absolute top-0 left-0 transition-all bg-tremor-background hover:bg-tremor-background-subtle text-tremor-brand`}
      >
        <Text className={theme != "dark" && "hidden"}>Go Light</Text>
      </Flex>
      <Flex
        justifyContent="center"
        className={`w-0 h-full ${
          theme == "light" && "w-full"
        } absolute top-0 right-0 transition-all bg-dark-tremor-background hover:bg-dark-tremor-background-subtle text-tremor-brand-muted`}
      >
        <Text className={theme != "light" && "hidden"}>Go Dark</Text>
      </Flex>
    </button>
  );
};

export default ToggleThemeButton;
