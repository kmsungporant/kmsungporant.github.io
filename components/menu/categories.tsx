import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const categories: { name: string; link: string }[] = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Timeline", link: "#timeline" },
  { name: "Contacts", link: "#contacts" },
];

export default function Categories({ selected, setSelected }) {
  return (
    <AnimateSharedLayout>
      <div className="hidden lg:block">
        <div className="flex flex-row gap-5 mr-5 text-xl font-semibold">
          {categories.map((categories, i) => (
            <motion.div
              key={i}
              className="text-dark-secondary hover:text-dark-secondary/70 dark:text-light-secondary dark:hover:text-light-secondary/70"
            >
              <motion.button
                className={`relative ${
                  i === selected &&
                  "font-3xl text-dark-primary dark:text-light-primary"
                }`}
                onClick={() => setSelected(i)}
              >
                <Link href={categories.link}>{categories.name}</Link>
                {i === selected && (
                  <motion.div
                    className="w-full h-1 rounded-lg bg-dark-primary dark:bg-light-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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
