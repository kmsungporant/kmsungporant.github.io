import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Contacts() {
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
      link: "https://www.linkedin.com/in/kmsungporant/",
      icon: <AiFillLinkedin />,
    },
    {
      name: "Twitter",
      linkName: "twitter/kmsjoseph",
      link: "https://twitter.com/kmsjoseph/",
      icon: <AiFillTwitterSquare />,
    },
    {
      name: "Facebook",
      linkName: "facebook/kmsungporant",
      link: "https://www.facebook.com/kmsungporant/",
      icon: <AiFillFacebook />,
    },
  ];

  return (
    <div id="contacts" className="h-full bg-gray-800 dark:bg-light-background ">
      <div className="flex items-center justify-center h-[95%] space-x-5  ">
        <div className="flex justify-center w-[3%]">
          <div className="flex justify-end w-[20%] space-x-5">
            <div className="flex flex-row items-center justify-center w-[15%] text-4xl lg:text-5xl font-black -rotate-90 ">
              <motion.div
                initial={{ opacity: 0, transform: "translateY(-10px)" }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: { duration: 1, delay: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-dark-primary dark:text-light-primary"
              >
                {"Contacts"}
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
          viewport={{ once: true }}
          className="flex w-2 h-60 lg:h-80 bg-dark-secondary dark:bg-light-secondary"
        />
        <div>
          <motion.h1
            className="text-2xl text-dark-tertiary dark:text-light-tertiary"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            {"<Contacts>"}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(10px)" }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: { duration: 1, delay: 0.75 },
            }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {icons.map((icon, i) => (
              <motion.div
                key={i}
                className="text-5xl"
                whileHover={{ scale: 1.1, x: 30 }}
              >
                <Link href={icon.link} passHref>
                  <a
                    target="_blank"
                    className="flex flex-row items-center space-x-2 cursor-pointer text-dark-secondary dark:text-light-secondary hover:text-dark-primary hover:dark:text-light-primary"
                  >
                    {icon.icon}
                    <a className="flex flex-col text-xl font-black lg:text-3xl">
                      {icon.linkName}
                    </a>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.h1
            className="text-2xl text-dark-tertiary dark:text-light-tertiary"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            {"</Contacts>"}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
