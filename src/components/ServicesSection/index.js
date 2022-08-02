import React, { useState } from "react";
import "../styles/index.css";
import { motion } from "framer-motion";

function ServicesSection() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="h-screen">
      <h2 className="uppercase font-normal text-center text-4xl my-10 tracking-wide">
        Serviços
      </h2>
      <motion.div
        layout
        transition={{
          layout: { duration: 0.3 },
        }}
        className="flex w-full justify-center flex-wrap"
      >
        <motion.div
          layout
          onClick={handleCollapse}
          className="rounded-2xl overflow-hidden shadow-lg p-5 m-5 md:w-1/3"
        >
          <motion.h2 layout>Acompanhamento de Obra</motion.h2>

          {!isCollapsed && (
            <motion.div layout>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                eveniet fugit magni voluptatum dolorum corporis eos! Autem
                nostrum suscipit exercitationem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum, consequatur.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ServicesSection;
