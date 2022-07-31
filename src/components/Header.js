import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@material-ui/icons";
import { motion } from "framer-motion";
import logo from "../assets/img/logo_nav.png";
import "../index.css";
import CtaButton from "./CtaButton";
import MenuItems from "./MenuItems";

function Header() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="sticky top-0 flex flex-wrap w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div>
            <motion.img 
            whileHover={{ scale: 1.1 }} src={logo} alt="Navbar" />
          </div>
          <motion.div
            className="absolute right-5 md:hidden"
            whileHover={{ scale: 1.5 }}
          >
            <MenuOutlined
              className={
                active
                  ? "text-white"
                  : "cursor-pointer"
              }
              onClick={showMenu}
            />
          </motion.div>
          <div>
            <ul className="hidden justify-end md:flex gap-6 p-4">
              {[
                ["Inicio", "/"],
                ["Serviços", "/servicos"],
                ["Portfolio", "/portfolio"],
                ["Sobre", "/sobre"],
                ["Contato", "/contato"],
              ].map(([text, link]) => (
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0 }}
                  key={text}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-yellow-500 active:text-yellow-300"
                >
                  <Link to={link}>{text}</Link>
                </motion.li>
              ))}

              <CtaButton />
            </ul>
          </div>
        </div>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </>
  );
}

export default Header;
