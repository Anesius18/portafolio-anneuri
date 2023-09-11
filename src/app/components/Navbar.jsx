"use client";
import { Link as Lenk } from "react-scroll";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, useAnimation } from "framer-motion";

const navLinks = [
  {
    title: "SOBRE MI",
    path: "#about",
  },
  {
    title: "PROJECTOS",
    path: "#projects",
  },
  {
    title: "CONTACTO",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
const closeMenu = () => {
  setNavbarOpen(false)
}
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <motion.div
          animate={{ x: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Link
            href={"/"}
            className="text-inherit md:text-2xl font-semibold custom-font cursor-pointer"
          >
            <div className="flex items-center">
              <p className="flex items-center text-blue-400 font-poppins text-3xl font-semibold leading-normal">
                &lt;
              </p>
              <img className="w-15 h-12" src="/logo2.svg" />
              <p></p>
              <p className="flex items-center text-blue-400 font-poppins text-3xl font-semibold leading-normal">
                /&gt;
              </p>
            </div>
          </Link>
        </motion.div>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  initial={{ y: 0 }}
                  animate={activeIndex === index ? controls : {}}
                >
                  <Lenk
                    activeClass="active" // Clase aplicada al enlace activo
                    to={link.path.slice(1)} // Elimina el signo "#" del path
                    spy={true} // Hacer scroll cuando el elemento esté en la vista
                    smooth={true} // Animación de desplazamiento suave
                    duration={500} // Duración de la animación en milisegundos
                    offset={-70} // Ajuste del desplazamiento
                    className="cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  >
                    {link.title}
                  </Lenk>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay closeMenu={closeMenu} links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
