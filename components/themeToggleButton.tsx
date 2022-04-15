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
      <div className="flex flex-row">
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
            <div className="w-2/5 ml-10 bg-white rounded-full dark:bg-black h-4/5"></div>
          ) : (
            <div className="w-2/5 ml-1 bg-white rounded-full dark:bg-black h-4/5"></div>
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
