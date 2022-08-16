import { motion } from "framer-motion";
import { CgClose, CgMenuRight } from "react-icons/cg";

export default function MenuIcon({ menuIsOpen, setMenuIsOpen }) {
  const handleMenuChange = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div
        className={
          menuIsOpen
            ? " text-light-secondary dark:text-dark-secondary hover:text-light-secondary/75 hover:dark:text-dark-secondary/75"
            : " text-dark-secondary dark:text-light-secondary hover:text-dark-secondary/75 hover:dark:text-light-secondary/75"
        }
      >
        <motion.button onClick={handleMenuChange} whileHover={{ scale: 1.1 }}>
          {menuIsOpen ? <CgClose /> : <CgMenuRight />}
        </motion.button>
      </div>
    </div>
  );
}
