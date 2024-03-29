import { AnimatePresence, motion } from "framer-motion";
import MenuOptions from "./menu/menuOptions";

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

export default function Menu({ menuIsOpen, setMenuIsOpen, selected, setSelected }) {
  return (
    <AnimatePresence>
      <div className="">
        {menuIsOpen && (
          <motion.div
            initial={{
              y: "-100%",
              opacity: 0,
              borderEndEndRadius: "50%",
              borderEndStartRadius: "50%",
            }}
            animate={{
              y: "0%",
              opacity: 1,
              borderEndEndRadius: "0%",
              borderEndStartRadius: "0%",
            }}
            exit={{
              y: "-100%",
              opacity: 0,
              borderEndEndRadius: "50%",
              borderEndStartRadius: "50%",
            }}
            transition={{ type: "spring", duration: 1, damping: 20 }}
            className="fixed z-50 flex items-center justify-center w-full h-full overflow-hidden transition-colors bg-gray-800 dark:bg-light-tertiary"
          >
            <MenuOptions setMenuIsOpen={setMenuIsOpen} selected={selected} setSelected={setSelected} />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
