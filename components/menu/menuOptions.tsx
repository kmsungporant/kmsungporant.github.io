import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFacebook,
} from "react-icons/ai";
import { ReactNode } from "react";

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
    { name: "Timeline", link: "#timeline" },
    { name: "Contacts", link: "#contacts" },
  ];

  return (
    <div className="h-full text-5xl font-black ">
      <ul className="flex flex-col items-center justify-center h-full leading-snug text-light-secondary dark:text-dark-secondary ">
        {categories.map((name, i) => (
          <div key={i}>
            <Link href={name.link} passHref>
              <li
                className="cursor-pointer hover:dark:text-dark-secondary/75 hover:text-light-secondary/75"
                onClick={() => handleClick()}
              >
                {name.name}
              </li>
            </Link>
          </div>
        ))}

        <div className="flex flex-row mt-4 space-x-4 ">
          {icons.map((icon, i) => (
            <Link href={icon.link} key={i}>
              <a
                target="_blank"
                className="cursor-pointer hover:dark:text-dark-secondary/75 hover:text-light-secondary/75 "
              >
                <motion.div>{icon.icon}</motion.div>
              </a>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
