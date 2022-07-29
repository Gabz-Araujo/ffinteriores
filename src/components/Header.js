import React, { useState } from "react";
import logo from "../assets/img/logo_nav.png";
import "../index.css";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { MenuOutlined } from "@material-ui/icons";
import { motion } from "framer-motion";

function Header() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="sticky top-0 flex flex-wrap w-full bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div>
            <img
              className="transform transition duration-500 hover:scale-110"
              src={logo}
              alt="Navbar"
            />
          </div>
          <div className="absolute right-5 scale-150 md:hidden">
            <MenuOutlined className={
              active
                ? "text-white transition duration-500"
                : "cursor-pointer"
                } 
                onClick={showMenu} />
          </div>
          <div>
            <ul className="hidden justify-end md:flex gap-6 p-4">
              <li className="hover:text-yellow-500 active:text-yellow-300">
                <Link to="/">Inicio</Link>
              </li>
              <li className="hover:text-yellow-500 active:text-yellow-300">
                <Link to="/">Servicos</Link>
              </li>
              <li className="hover:text-yellow-500 active:text-yellow-300">
                <Link to="/">Portfolio</Link>
              </li>
              <li className="hover:text-yellow-500 active:text-yellow-300">
                <Link to="/">Sobre</Link>
              </li>
              <li className="hover:text-yellow-500 active:text-yellow-300">
                <Link to="/">Contato</Link>
              </li>
              <button className="border border-yellow-300 bg-yellow-400 rounded-xl px-6 text-white font-bold hover:bg-yellow-200 uppercase transform transition duration-400">
                Peça seu orçamento!
              </button>
            </ul>
          </div>
        </div>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </>
  );
}

export default Header;
