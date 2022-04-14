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

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

const Sidebar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringIcon, setIsHoveringIcon] = useState(false);

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
    <motion.div
      className="fixed z-50 flex justify-center h-full text-white bg-DarkGray"
      initial={{ width: "15vw" }}
      animate={isHovering ? { width: "30vw" } : { width: "15vw" }}
    >
      <div className={isHovering ? "flex h-full w-42" : "flex h-full w-20"}>
        <div className="flex flex-col text-3xl ">
          <div className="font-black grow">
            {isHovering ? (
              <div className="flex justify-start p-5 -skew-x-2">MinsungK</div>
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
                      <a className="flex hover:text-WitchingHourLight">
                        {isHovering ? (
                          <div className="p-3 my-6 rounded-lg ">
                            {icon.hoeverIcon}
                          </div>
                        ) : (
                          <div className="p-3 my-6 rounded-lg ">
                            {icon.icon}
                          </div>
                        )}
                        {isHovering ? (
                          <div className="p-3 my-6 text-lg ">{icon.name}</div>
                        ) : null}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center m-5 font-black cursor-pointer hover:text-WitchingHourLight">
            {isHovering ? null : (
              <BsArrowRightSquare
                className=""
                onClick={() => setIsHovering(true)}
              />
            )}
            {isHovering ? (
              <div className="text-lg " onClick={() => setIsHovering(false)}>
                Close
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
