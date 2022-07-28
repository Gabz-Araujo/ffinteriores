import React from "react";
import logo from "../assets/img/logo_nav.png";
import "../index.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="relative flex flex-wrap w-full bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="m-2">
            <img className="transform transition duration-500 hover:scale-110" src={logo} alt="Navbar" />{" "}
          </div>
          <div className="">
            <ul className="flex justify-between">
              <li className="m-2 hover:text-yellow-500 active:text-yellow-300">
                <a href="#inicio">Inicio</a>
              </li>
              <li className="m-2 hover:text-yellow-500 active:text-yellow-300">
                <a href="#inicio">Servicos</a>
              </li>
              <li className="m-2 hover:text-yellow-500 active:text-yellow-300">
                <a href="#inicio">Portfolio</a>
              </li>
              <li className="m-2 hover:text-yellow-500 active:text-yellow-300">
                <a href="#inicio">Sobre</a>
              </li>
              <li className="m-2 hover:text-yellow-500 active:text-yellow-300">
                <a href="#inicio">Contato</a>
              </li>
              <button className="border border-yellow-300 bg-yellow-400 rounded-xl px-6 text-white font-bold hover:bg-yellow-200 uppercase transform transition duration-400">Peça seu orçamento!</button>
            </ul>
          </div>
        </div>
      </nav>
      <button><FaBars /></button>
    </>
  );
};

export default Navbar;
