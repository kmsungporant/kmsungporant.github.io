import Link from "next/link";
import { GiCrossedSwords } from "react-icons/gi";
import { useState, useEffect } from "react";
import ThemeToggle from "./themetoggle";
import { FaHamburger, FaWindowRestore } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ menuIsOpen, setMenuIsOpen }) => {
  const [isClosed, setIsOpen] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);

  let toggleMenu = () => {
    setIsOpen(!isClosed);
    setMenuIsOpen(!isClosed);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200 && window.innerWidth < 800) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }

      if (window.innerWidth > 500) {
        setBackgroundChange(true);
      } else {
        setBackgroundChange(false);
      }
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);

  return (
    <div className="flex justify-center ">
      <AnimatePresence>
        {changeHeader && !isClosed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            className="fixed top-0 z-30 flex justify-center w-full bg-DarkGray dark:bg-white "
          >
            <Link href="/">
              <a className="flex py-3 text-4xl font-semibold -skew-y-2 dark:text-NavyBlueLight text-WitchingHourLight dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80">
                MinsungK
              </a>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            className={
              backgroundChange && !isClosed
                ? "fixed top-0 z-50 flex flex-row justify-between w-full bg-DarkGray dark:bg-white "
                : "fixed top-0 z-50 flex flex-row justify-between w-full bg-transparent "
            }
          >
            <Link href="/">
              <a className="flex mt-5 ml-16 text-4xl font-semibold md:ml-40 -skew-y-2 dark:text-NavyBlueLight text-WitchingHourLight dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80">
                MinsungK
              </a>
            </Link>

            <div className="mt-5 mr-16 text-4xl cursor-pointer md:mr-40 ">
              <ThemeToggle />
              <button
                onClick={() => toggleMenu()}
                className="dark:text-NavyBlueLight text-WitchingHourLight dark:hover:text-NavyBlueLight/80 hover:text-WitchingHourLight/80"
              >
                {menuIsOpen ? <GiCrossedSwords /> : <FaHamburger />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
