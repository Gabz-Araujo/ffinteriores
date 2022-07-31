import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function MenuItems({ showMenu, active }) {
  return (
    <motion.ul
      animate={active ? "open" : "closed"}
      variants={variants}
      className={
        active
          ? "flex-col fixed inset-0 left-1/3 p-4 justify-end bg-gray-300/90 md:hidden"
          : "hidden"
      }
    >
      <Close className="scale-150 cursor-pointer m-4" onClick={showMenu} />
      <li className="hover:text-white hover:font-bold">
        <Link to="/">Inicio</Link>
      </li>
      <li className="hover:text-white hover:font-bold">
        <Link to="/">Servicos</Link>
      </li>
      <li className="hover:text-white hover:font-bold">
        <Link to="/">Portfolio</Link>
      </li>
      <li className="hover:text-white hover:font-bold">
        <Link to="/">Sobre</Link>
      </li>
      <li className="hover:text-white hover:font-bold">
        <Link to="/">Contato</Link>
      </li>
      <button className="border my-5 border-yellow-300 bg-yellow-400 rounded-xl px-4 py-1 text-white font-bold hover:bg-yellow-200 uppercase transform transition duration-400">
        Peça seu orçamento!
      </button>
    </motion.ul>
  );
}

export default MenuItems;
