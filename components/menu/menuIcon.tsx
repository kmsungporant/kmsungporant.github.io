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
      <div className="text-dark-secondary hover:text-dark-secondary/70 dark:text-light-secondary dark:hover:text-light-secondary/70 ">
        <motion.button onClick={handleMenuChange} whileHover={{ scale: 1.1 }}>
          {menuIsOpen ? <CgClose /> : <CgMenuRight />}
        </motion.button>
      </div>
    </div>
  );
}
