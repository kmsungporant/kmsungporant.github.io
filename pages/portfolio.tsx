import Menu from "../components/menu";

import { useState } from "react";

export default function PortfolioPage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="h-full bg-DarkGray dark:bg-white scroll-smooth font-Consolas">
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div>
        test
      </div>
    </div>
  );
}
