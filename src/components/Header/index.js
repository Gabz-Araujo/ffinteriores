import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@material-ui/icons";
import { motion } from "framer-motion";
import logo from "../assets/img/logo_nav.png";
import "../styles/index.css";
import CtaButton from "../CtaButton";
import MenuItems from "./MenuItems";

function Header() {
  //useState is a hook that allows you to add state to your component.
  //It takes two arguments:
  //1. an initial value
  //2. a function that takes the current state and an action and returns a new state
  //The new state is the result of the action.

  //Aqui usamos o useState para criar um estado que armazenará o valor do menu aberto ou fechado.
  //O valor inicial é false, ou seja, o menu está fechado.

  const [isOpen, setIsOpen] = useState(false);

  //Aqui a funçao showMenu é chamada quando o usuário clica no ícone do menu.
  //A função setIsOpen é chamada para alterar o valor do estado.
  //O valor do estado é alterado para true ou false.
  //Sempre o valor do estado é alterado para o contrário do atual.

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  //Aqui usamos o useState para executar a função mudarCor a cada vez que o usuário rola a página.

  // const [backgroundColor, setBackground] = useState(false);

  //Quando o usuário scrolla a página a função mudarCor é executada.
  //Quando o usuário scrolla mais de 100px a cor do header é alterada.

  // const mudarCor = () => {
  //   window.scrollY > 100 ? setBackground(true) : setBackground(false);
  // };

  //Aqui é a inclusão do escutador de evento para o evento scroll.

  // window.addEventListener("scroll", mudarCor);

  return (
    <>
      <nav className="fixed top-0 flex flex-wrap w-full z-20 bg-white">
        {/* // {backgroundColor ? :} */}

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div>
            <motion.img whileHover={{ scale: 1.1 }} src={logo} alt="Navbar" />
          </div>
          <motion.div
            className="absolute right-5 md:hidden"
            whileHover={{ scale: 1.5 }}
          >
            <MenuOutlined
              className={isOpen ? "text-white" : "cursor-pointer"}
              onClick={showMenu}
            />
          </motion.div>
          <div>
            <ul className="hidden justify-end md:flex gap-6 p-4">
              {/* Aqui usamos o map para criar os itens de nossa navbar, poderíamos também importar de um arquivo de dados, o que podemos fazer em uma refatoração do código
              Desta maneira evitamos a repetição de código e coo estamos usando tailwind css a repetição de classes que podem causar confusão */}
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
                  className="text-gray-700 font-bold hover:text-yellow-500 active:text-yellow-300"
                  // {
                  //   backgroundColor
                  //     ? "text-gray-700 font-bold hover:text-yellow-500 active:text-yellow-300"
                  //     : "text-white font-bold hover:text-yellow-500 active:text-yellow-300"
                  // }
                >
                  <Link to={link}>{text}</Link>
                </motion.li>
              ))}

              <CtaButton />
            </ul>
          </div>
        </div>

        <MenuItems showMenu={showMenu} isOpen={isOpen} />
      </nav>
    </>
  );
}

export default Header;
