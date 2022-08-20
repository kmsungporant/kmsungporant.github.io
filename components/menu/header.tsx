import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Categories from "./categories";
import MenuIcon from "./menuIcon";
import ThemeToggle from "./themetoggle";

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

export default function Header({
  menuIsOpen,
  setMenuIsOpen,
  selected,
  setSelected,
}) {
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className="fixed z-50 w-full h-20 drop-shadow-2xl ">
      <div
        className={
          menuIsOpen
            ? "bg-gray-800 dark:bg-light-tertiary h-full"
            : "bg-gray-900 dark:bg-light-background h-full"
        }
      >
        <div className="flex justify-center h-full ">
          <div className="justify-between w-4/5">
            <div className="flex justify-start ">
              <div className="text-4xl font-black">
                <Link href={"/"} passHref>
                  <div className="fixed flex justify-start p-5 overflow-hidden cursor-pointer -skew-x-2 ">
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 1 }}
                      className=" text-dark-secondary hover:text-dark-secondary/70 dark:text-light-secondary dark:hover:text-light-secondary/70"
                      onClick={() => {
                        setSelected(0);
                      }}
                    >
                      Minsung
                    </motion.span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-end h-full gap-3 text-4xl">
              <Categories selected={selected} setSelected={setSelected} />
              <ThemeToggle menuIsOpen={menuIsOpen} />
              <MenuIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
