import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence>
      <div className="absolute z-50 justify-center">
        <motion.div className="fixed right-0">
          <div className="mt-5 mr-10 text-4xl cursor-pointer ">
            <ThemeToggle />
            <button
              onClick={() => toggleMenu()}
              className="ml-3 text-white dark:text-NavyBlueLight dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
            >
              {menuIsOpen ? (
                <CgClose className="text-black" />
              ) : (
                <CgMenuRight />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MenuIcon;
