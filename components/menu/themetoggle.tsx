import { motion, MotionConfig } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

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
      className="text-dark-secondary hover:text-dark-secondary/70 dark:text-light-secondary dark:hover:text-light-secondary/70"
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <FaSun className="hidden dark:block" />
        <FaMoon className="block dark:hidden" />
      </motion.div>
    </button>
  );
}
