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
          ? "text-black dark:text-white dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
          : "text-white dark:text-black dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
      }
    >
      <div
        className={
          menuIsOpen
            ? "text-black dark:text-white md:dark:text-black dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
            : "text-white dark:text-black md:dark:text-white dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
        }
      >
        <FaSun className="hidden dark:block" />
        <FaMoon className="block dark:hidden" />
      </div>
    </button>
  );
}
