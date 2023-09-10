"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HelloSection = () => {
  return (
    <section className="lg:py-16">
      <div className=" sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`col-span-3 place-self-center mt-4 lg:mt-0 order-2 sm:order-1 sm:flex sm:flex-col-reverse`}
        >
       
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8  sm:text-left justify-self-start order-1 sm:order-2"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl  lg:leading-normal font-extrabold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center ">
              Hola, soy{" "}
            </span>
            <br></br>
            <div className="flex items-center ">
            <p className="flex items-center text-blue-400 font-poppins text-4xl sm:text-5xl lg:text-7xl font-semibold leading-normal">#</p>
              <TypeAnimation
                sequence={[
                  'Anneuri',
                  1000,
                  'Desarrollador Front-End',
                  1000,
                  'Diseñador UI',
                  1000,
                  'Técnico en informática',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ whiteSpace: "nowrap" }} 

              />
            </div>
          </h1>
         
        </motion.div>
        
      </div>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl flex">
          Apasionado estudiante de Administración de Sistemas Informáticos con habilidades en JS, hardware y sistemas.
          </p>
    </section>
  );
};

export default HelloSection;