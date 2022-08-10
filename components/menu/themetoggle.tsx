import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

type Props = {
  menuIsOpen: boolean;
};

export default function ThemeToggle({ menuIsOpen }) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const MEDIA = "(prefers-color-scheme: dark)";
    const setSystem = () => setTheme("system");
    const media = window.matchMedia(MEDIA);
    media.addEventListener("change", setSystem);
    return () => media.removeEventListener("change", setSystem);
  }, [setTheme]);

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark" || (theme === "system" && resolvedTheme === "dark")
            ? "light"
            : "dark"
        )
      }
      className={
        menuIsOpen
          ? " text-light-secondary dark:text-dark-secondary hover:text-light-secondary/75 hover:dark:text-dark-secondary/75"
          : " text-dark-secondary dark:text-light-secondary hover:text-dark-secondary/75 hover:dark:text-light-secondary/75"
      }
    >
      <div>
        <FaSun className="hidden mx-2 dark:block" />
        <FaMoon className="block mx-2 dark:hidden" />
      </div>
    </button>
  );
}
