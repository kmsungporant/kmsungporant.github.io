import { motion } from "framer-motion";
import Link from "next/link";
import MenuIcon from "./menuIcon";
import ThemeToggle from "./themetoggle";

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

export default function Header({ menuIsOpen, setMenuIsOpen }) {
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className="fixed z-50 w-full h-20 ">
      <div
        className={
          menuIsOpen
            ? "bg-dark-secondary dark:bg-light-secondary h-full"
            : "bg-dark-background dark:bg-light-background h-full"
        }
      >
        <div className="flex justify-center h-full ">
          <div className="justify-between w-4/5">
            <div className="flex justify-start ">
              <div className="text-4xl font-black">
                <Link href={"/"} passHref>
                  <div className="fixed flex justify-start p-5 overflow-hidden cursor-pointer -skew-x-2 text-dark-secondary dark:text-light-secondary">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className={
                        menuIsOpen
                          ? " text-light-secondary dark:text-dark-secondary hover:text-light-secondary/75 hover:dark:text-dark-secondary/75"
                          : " text-dark-secondary dark:text-light-secondary hover:text-dark-secondary/75 hover:dark:text-light-secondary/75"
                      }
                    >
                      Minsung
                    </motion.span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-end h-full text-4xl">
              <ThemeToggle menuIsOpen={menuIsOpen} />
              <MenuIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
