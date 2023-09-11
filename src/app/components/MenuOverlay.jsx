import React from "react";
import { Link as Lenk } from "react-scroll";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, closeMenu }) => {
  
  return (
    <nav className=" lg:hidden top-0 left-0 right-0 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          {links.map((link, index) => (
            <li key={index}>
              <motion.div whileHover={{ y: -5 }} initial={{ y: 0 }}>
                <Lenk
                  activeClass="active"
                  to={link.path.slice(1)}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  onClick={() => closeMenu()} // Agrega () para llamar a la función
                >
                  {link.title}
                </Lenk>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuOverlay;
