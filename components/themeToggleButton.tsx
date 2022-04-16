import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setToggleSwitch(true);
    }
  }, [theme]);

  const toggleSwitchHandler = () => {
    if (toggleSwitch === false) {
      setToggleSwitch(true);
      setTheme("light");
    } else {
      setToggleSwitch(false);
      setTheme("dark");
    }
  };

  return (
    <div className="">
      <div className="flex flex-row items-center">
        <FaSun
          className={
            toggleSwitch
              ? null
              : "dark:text-NavyBlueLight/80 text-WitchingHourLight/80"
          }
        />
        <button
          className="w-20 h-10 mx-2 bg-black rounded-full dark:bg-white"
          onClick={toggleSwitchHandler}
        >
          {toggleSwitch ? (
            <motion.div
              className="w-2/5 bg-white rounded-full ml-9 dark:bg-black h-4/5"
              animate={{ transform: "translateX(5px)" }}
            />
          ) : (
            <motion.div
              className="w-2/5 ml-2 bg-white rounded-full dark:bg-black h-4/5"
              animate={{ transform: "translateX(-5px)" }}
            />
          )}
        </button>
        <FaMoon
          className={
            toggleSwitch
              ? "dark:text-NavyBlueLight/80 text-WitchingHourLight/80"
              : null
          }
        />
      </div>
    </div>
  );
};

export default ThemeToggleButton;
