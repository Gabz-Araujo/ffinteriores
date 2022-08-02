import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../styles/index.css";
import { motion } from "framer-motion";
import CtaButton from "../CtaButton";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};


//Aqui a função recebe o estado do componente como argumento.
//O estado é um objeto que contém o valor do menu aberto ou fechado.
//O valor do menu está no estado isOpen.

function MenuItems({ showMenu, isOpen }) {
  return (
    <>
      <motion.ul
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={
          isOpen
            ? "flex-col fixed inset-0 left-1/3 p-4 justify-end bg-gray-300/90 md:hidden"
            : "hidden"
        }
      >
        <Close className="scale-150 cursor-pointer m-4" onClick={showMenu} />

        {[
          ["Inicio", "/"],
          ["Serviços", "/servicos"],
          ["Portfolio", "/portfolio"],
          ["Sobre", "/sobre"],
          ["Contato", "/contato"],
        ].map(([text, link]) => (
          <motion.li
            whileHover={{ scale: 1.1, originX: 0, color: "white" }}
            whileTap={{ scale: 0.9, color: "white" }}
            key={text}
            className="hover:font-bold my-5"
          >
            <Link to={link} onClick={showMenu}>
              {text}
            </Link>
          </motion.li>
        ))}
        <CtaButton />
      </motion.ul>
    </>
  );
}

export default MenuItems;
