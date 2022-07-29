import {
  RiHome4Line,
  RiHome4Fill,
  RiContactsBook2Line,
  RiContactsBook2Fill,
} from "react-icons/ri";
import { BsPerson, BsPersonFill, BsArrowRightSquare } from "react-icons/bs";
import { AiOutlineFolder, AiFillFolderOpen } from "react-icons/ai";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./themetoggle";
import ThemeToggleButton from "./themeToggleButton";

type Props = {
  menuIsOpen: boolean;
};

export default function Sidebar({ menuIsOpen }) {
  const [isHovering, setIsHovering] = useState(false);

  const icons: {
    name: string;
    location: string;
    icon: ReactNode;
    hoeverIcon: ReactNode;
  }[] = [
    {
      name: "Home",
      location: "#hero",
      icon: <RiHome4Line />,
      hoeverIcon: <RiHome4Fill />,
    },
    {
      name: "About",
      location: "#about",
      icon: <BsPerson />,
      hoeverIcon: <BsPersonFill />,
    },
    {
      name: "Portfolio",
      location: "#portfolio",
      icon: <AiOutlineFolder />,
      hoeverIcon: <AiFillFolderOpen />,
    },
    {
      name: "Contacts",
      location: "#contacts",
      icon: <RiContactsBook2Line />,
      hoeverIcon: <RiContactsBook2Fill />,
    },
  ];

  return (
    <div className="hidden md:block">
      <div className="">
        <motion.div
          className="fixed z-50 flex justify-center h-full text-white bg-DarkGray "
          animate={isHovering ? { width: "20vw" } : { width: "10vw" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex h-full">
            <div className="flex flex-col text-[2rem] ">
              <div className="font-black grow">
                {isHovering ? (
                  <Link href={"/"}>
                    <motion.div
                      className="fixed flex justify-start p-5 overflow-hidden -skew-x-2 cursor-pointer hover:text-WitchingHourLight  dark:hover:text-NavyBlueLight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    >
                      Minsung
                      <motion.span
                        initial={{
                          transform: "translateX(-90px)",
                          padding: "0rem 5.6rem 0rem 0rem",
                        }}
                        animate={{
                          transform: "translateX(0px)",
                          padding: "0rem 0rem 0rem 0rem",

                          transition: {
                            delay: 0.5,
                            duration: 0.3,
                            ease: "easeInOut",
                          },
                        }}
                        className="flex bg-DarkGray"
                      >
                        K
                      </motion.span>
                    </motion.div>
                  </Link>
                ) : (
                  <div className="flex justify-center p-5 ">MK</div>
                )}
              </div>
              <div className="font-black grow">
                <div className="flex justify-center">
                  <div className="">
                    {icons.map((icon, i) => (
                      <div key={i}>
                        <Link href={icon.location}>
                          <a className="flex w-full bg-transparent group hover:text-WitchingHourLight  dark:hover:text-NavyBlueLight">
                            <div className="z-10 mx-3 my-6 bg-transparent rounded-lg group-hover:bg-transparent ">
                              {icon.icon}
                            </div>
                            {isHovering ? (
                              <motion.div
                                className="mx-3 my-6 text-lg overflow"
                                initial={{
                                  opacity: 0,
                                  transform: "translateX(-20px)",
                                }}
                                animate={{
                                  transition: {
                                    ease: "easeOut",
                                  },
                                  opacity: 1,
                                  transform: "translateX(0px)",
                                }}
                              >
                                {icon.name}
                              </motion.div>
                            ) : null}
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-5 ">
                {isHovering ? (
                  <ThemeToggleButton />
                ) : (
                  <ThemeToggle menuIsOpen={menuIsOpen} />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
