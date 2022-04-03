import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  menuIsOpen: boolean;
};

const Gotop: React.FC<Props> = ({ menuIsOpen }) => {
  const [atTop, setAtTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }

      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);

  return (
    <div className="fixed text-4xl bottom-5 right-5 text-WitchingHourLight dark:text-NavyBlueLight hover:text-WitchingHourLight/80 dark:text-NavyBlueLight/80">
      <AnimatePresence>
        {atTop ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            onClick={() => scrollToTop()}
            className="opacity-100 cursor-pointer"
          >
            {menuIsOpen ? (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <BsFillArrowUpCircleFill />
              </motion.div>
            ) : (
              <BsFillArrowUpCircleFill />
            )}
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Gotop;
