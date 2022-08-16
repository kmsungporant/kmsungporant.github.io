import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

type Props = {
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

export default function HeaderOptions({ setMenuIsOpen }) {
  let handleClick = () => {
    setMenuIsOpen(false);
  };

  const icons: { link: string; icon: ReactNode }[] = [
    { link: "https://github.com/kmsungporant/", icon: <AiFillGithub /> },
    {
      link: "https://www.linkedin.com/in/kmsungporant/",
      icon: <AiFillLinkedin />,
    },
    { link: "mailto:Kmsungporant@gmail.com", icon: <AiFillMail /> },
    { link: "https://www.facebook.com/kmsungporant", icon: <AiFillFacebook /> },
  ];

  const categories: { name: string; link: string }[] = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contacts", link: "#contacts" },
  ];

  return (
    <div className="h-full text-5xl font-black ">
      <ul className="flex flex-col items-center justify-center h-full leading-snug text-light-secondary dark:text-dark-secondary ">
        {categories.map((name, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: "easeInOut", delay: i * 0.15 },
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Link href={name.link} passHref>
              <li
                className="cursor-pointer hover:dark:text-dark-secondary/75 hover:text-light-secondary/75"
                onClick={() => handleClick()}
              >
                {name.name}
              </li>
            </Link>
          </motion.div>
        ))}

        <div className="flex flex-row mt-4 space-x-4 ">
          {icons.map((icon, i) => (
            <Link href={icon.link} key={i} passHref>
              <motion.a
                target="_blank"
                className="cursor-pointer hover:dark:text-dark-secondary/75 hover:text-light-secondary/75 "
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div>{icon.icon}</motion.div>
              </motion.a>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
