import Menu from "./components/menu";
import Header from "./components/header";
import Gotop from "./components/goTopArrow";
import { useState } from "react";

const AboutPage = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return <div className="h-full bg-DarkGray dark:bg-white scroll-smooth font-Consolas">
        <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div>
          
      </div>
      <Gotop menuIsOpen={menuIsOpen} />

    </div>
}

export default AboutPage;