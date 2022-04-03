import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Contacts = () => {
  const icons: {
    name: string;
    linkName: string;
    link: string;
    icon: ReactNode;
  }[] = [
    {
      name: "Github",
      linkName: "github.com/kmsungporant",
      link: "https://github.com/kmsungporant/",
      icon: <AiFillGithub />,
    },
    {
      name: "Linkedin",
      linkName: "linkedin/kmsungporant",
      link: "https://github.com/kmsungporant/",

      icon: <AiFillLinkedin />,
    },
    {
      name: "Twitter",
      linkName: "twitter/kmsjoseph",
      link: "https://github.com/kmsungporant/",

      icon: <AiFillTwitterSquare />,
    },
    {
      name: "Facebook",
      linkName: "facebook/kmsungporant",
      link: "https://github.com/kmsungporant/",

      icon: <AiFillFacebook />,
    },
  ];

  return (
    <div id="contacts" className="h-1/2">
      <AnimatePresence>
        <div className="flex items-center justify-center h-full space-x-5 text-white bg-DarkGray dark:bg-white dark:text-black ">
          <div className="flex justify-center w-[6%]">
            <div className="flex justify-end w-[20%] space-x-5">
              <div className="flex flex-row items-center justify-center w-[15%] text-5xl font-black -rotate-90 ">
                <motion.div
                  initial={{ opacity: 0, transform: "translateY(-10px)" }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: { duration: 1, delay: 1 },
                  }}
                  className=""
                >
                  Contacts
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-10px)" }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: { duration: 1 },
            }}
            className="flex w-2 bg-white h-60 dark:bg-black"
          />

          <motion.div
            initial={{ opacity: 0, transform: "translateX(10px)" }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: { duration: 1, delay: 1.5 },
            }}
            className="space-y-3"
          >
            {icons.map((icon, i) => (
              <div key={i} className="text-5xl">
                <Link href={icon.link} passHref>
                  <a
                    target="_blank"
                    className="flex flex-row items-center space-x-2 cursor-pointer hover:text-WitchingHourLight hover:dark:text-NavyBlueLight"
                  >
                    {icon.icon}
                    <a className="flex flex-col text-base font-black">
                      {icon.linkName}
                    </a>
                  </a>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Contacts;
