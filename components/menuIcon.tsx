import { CgClose, CgMenuRight } from "react-icons/cg";
import ThemeToggle from "./themetoggle";

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

const MenuIcon = ({ menuIsOpen, setMenuIsOpen }) => {
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className="absolute z-50 md:hidden">
      <div className="fixed right-0">
        <div className="mt-5 mr-10 text-4xl cursor-pointer ">
          <ThemeToggle menuIsOpen={menuIsOpen} />
          <button
            onClick={() => toggleMenu()}
            className={
              menuIsOpen
                ? "ml-3 text-black dark:text-black dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
                : "ml-3 text-white dark:text-black dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
            }
          >
            {menuIsOpen ? (
              <CgClose
                className={
                  menuIsOpen
                    ? "text-black dark:text-white dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
                    : "text-white dark:text-black dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
                }
              />
            ) : (
              <CgMenuRight />
            )}
          </button>
        </div>
      </div>
      <div className="absolute mt-5 ml-10 ">
        <span className="text-4xl font-black text-white dark:text-black ">
          MinsungK
        </span>
      </div>
    </div>
  );
};

export default MenuIcon;
