import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

type Props = {
  menuIsOpen: boolean;
};

const ThemeToggle = ({ menuIsOpen }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const MEDIA = "(prefers-color-scheme: dark)";
    const setSystem = () => setTheme("system");
    const media = window.matchMedia(MEDIA);
    media.addEventListener("change", setSystem);
    return () => media.removeEventListener("change", setSystem);
  }, []);

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
      <div className="text-white">
        <FaSun className="block dark:hidden" />
        <FaMoon className="hidden dark:block" />
      </div>
    </button>
  );
};

export default ThemeToggle;
