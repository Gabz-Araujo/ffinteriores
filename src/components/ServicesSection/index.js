import React, { useState } from "react";
import "../styles/index.css";
import { motion } from "framer-motion";

function ServicesSection({ services }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="h-screen">
      <h2 className="uppercase font-normal text-center text-4xl my-10 tracking-wide">
        Serviços
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {services.map((service, index) => {
          return (
            <motion.div
              key={index}
              onClick={handleCollapse}
              layout
              transition={{
                layout: { duration: 0.3 },
              }}
              className="w-full md:w-1/3 p-4 rounded-2xl overflow-hidden shadow-lg border-solid border-1 border-gray-200 m-2"
            >
              <motion.h2 layout>{service.title}</motion.h2>

              {!isCollapsed && (
                <motion.div layout>
                  <p className="p-4">{service.describe}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesSection;
