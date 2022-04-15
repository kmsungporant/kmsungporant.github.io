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

const Sidebar = ({ menuIsOpen }) => {
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
    <div className="hidden sm:block">
      <div className="">
        <motion.div
          className="fixed z-50 flex justify-center h-full text-white bg-DarkGray dark:bg-DarkGray/70"
          animate={isHovering ? { width: "15vw" } : { width: "6vw" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex h-full">
            <div className="flex flex-col text-[2rem] ">
              <div className="font-black grow">
                {isHovering ? (
                  <div className="flex justify-start p-5 -skew-x-2">
                    MinsungK
                  </div>
                ) : (
                  <div className="flex justify-center p-5 ">MK</div>
                )}
              </div>
              <div className="font-black grow">
                <div className="flex justify-center">
                  <div className="">
                    {icons.map((icon, i) => (
                      <div key={i}>
                        <Link href={icon.location} passHref>
                          <a className="flex w-full bg-transparent hover:bg-WitchingHourLight rounded-xl dark:hover:bg-NavyBlueLight">
                            <div className="mx-5 my-6 rounded-lg">
                              {icon.icon}
                            </div>
                            {isHovering ? (
                              <div className="mx-5 my-6 text-lg ">
                                {icon.name}
                              </div>
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
};

export default Sidebar;
