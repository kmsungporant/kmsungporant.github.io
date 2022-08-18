import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const categories: { name: string; link: string; color: string }[] = [
  { name: "Home", link: "#hero", color: "#f5f5f5" },
  { name: "About", link: "#about", color: "#f5f5f5" },
  { name: "Portfolio", link: "#portfolio", color: "#f5f5f5" },
  { name: "Timeline", link: "#timeline", color: "#f5f5f5" },
  { name: "Contacts", link: "#contacts", color: "#f5f5f5" },
];

export default function Categories({ menuIsOpen }) {
  const [selected, setSelected] = useState(0);

  return (
    <AnimateSharedLayout>
      <div className="hidden lg:block">
        <div className="flex flex-row gap-5 mr-5 text-xl font-semibold">
          {categories.map((categories, i) => (
            <motion.div
              key={i}
              className={`${
                menuIsOpen
                  ? "text-light-secondary dark:text-dark-secondary hover:text-light-secondary/75 hover:dark:text-dark-secondary/75"
                  : "text-dark-secondary dark:text-light-secondary hover:text-dark-secondary/75 hover:dark:text-light-secondary/75"
              } `}
            >
              <motion.button
                className={`relative ${
                  i === selected &&
                  "font-3xl text-dark-primary dark:text-light-primary"
                }`}
                onClick={() => setSelected(i)}
                animate
              >
                <Link href={categories.link}>{categories.name}</Link>
                {i === selected && (
                  <motion.div
                    className="w-full h-1 rounded-lg bg-dark-primary dark:bg-light-primary"
                    layoutId="underline"
                  />
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimateSharedLayout>
  );
}
