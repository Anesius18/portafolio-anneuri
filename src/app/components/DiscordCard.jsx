"use client";
import { Link as Lenk } from "react-scroll";
import React, { useState } from "react";
import Link from "next/link";
import "./discordcard.css";

const DiscordCard = () => {
  const [roles, setRoles] = useState([]);
  const [tooltipState, setTooltipState] = useState({});

  const randomHexColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const randomWord = () => {
    const words = [
      "Increíble",
      "Genial",
      "Estupendo",
      "Bueno",
      "Súper",
      "Magnífico",
      "Superior",
      "Maravilloso",
      "Asombroso",
      "Fantástico",
      "Fabuloso",
      "Increíble",
      "Maravilloso",
      "Espectacular",
      "Estupendo",
      "Terrifico",
      "Asombroso",
    ];
    return words[Math.floor(Math.random() * words.length)];
  };
  const addRole = () => {
    // Verificar si ya hay 10 roles
    if (roles.length < 10) {
      const newRole = {
        color: randomHexColor(),
        name: randomWord(),
      };
      setRoles([...roles, newRole]);
      setTooltipState((prevState) => ({
        ...prevState,
        [roles.length]: false,
      }));
    } else {
      alert("Lo agradezco, ya con eso es suficiente :·)");
    }
  };

  const removeRole = (index) => {
    const updatedRoles = [...roles];
    updatedRoles.splice(index, 1);
    setRoles(updatedRoles);
  };

  return (
    <div className="flex items-center">
      <div className="z-10 card-container flex-grow flex-row-reverse">
        {" "}
        {/* Agrega flex-grow para ocupar todo el espacio disponible */}
        <div className="card nitro-card ">
          {/* -----------gif-Banner---------------- */}
          <div className="card-header">
            <div
              style={{ background: 'url("/images/banner.gif")' }}
              className="banner-img"
            >
              {/* -----------------------Foto-Perfil------ */}
            </div>
          </div>
          <div className="card-body">
            <div className="profile-header">
          <Link href="https://www.linkedin.com/in/anneuri-annel-canela-ramirez-a8bbb8233/">
              <div className="profil-logo">
          
               
                <img src="/images/anneuri.jpg" alt="anneuri photo" />
                
              </div>
              
              {/* -------------------------------------------Bagdes--------------------- */}
            </Link>
              <div className="badges-container flex-row">
                <div className="badge-item">
                  <img src="/react.svg" alt="" />
                  <div className="tooltip tooltip-up">React</div>
                </div>
                <div className="badge-item">
                  <img src="/js.svg" alt="" />
                  <div className="tooltip tooltip-up">JavaScript</div>
                </div>
                <div className="badge-item">
                  <img src="/css.svg" alt="" />
                  <div className="tooltip tooltip-up">CSS</div>
                </div>
                <div className="badge-item">
                  <img src="/html.svg" alt="" />
                  <div className="tooltip tooltip-up">HTML</div>
                </div>
              </div>
            </div>

            <div className="profile-body">
              <div className="username">
                Anneuri<span>#Canela</span>
                <div className="badge">Developer</div>
              </div>
              <hr />
              <div className="basic-infos">
                <Lenk
                  activeClass="active" // Clase aplicada al enlace activo
                  to="about" // Elimina el signo "#" del path
                  spy={true} // Hacer scroll cuando el elemento esté en la vista
                  smooth={true} // Animación de desplazamiento suave
                  duration={500} // Duración de la animación en milisegundos
                  offset={-70} // Ajuste del desplazamiento
                  className="cursor-pointer block px-6 py-3 rounded-full  w-full bg-white hover:bg-slate-900 text-white center bg-gradient-to-r from-blue-400 to-purple-600 text-center"
                >
                  Sobre mi
                </Lenk>
                <button className="px-1 py-1 w-full  rounded-full bg-gradient-to-br from-blue-400 to-purple-600 hover:bg-slate-800 text-white  mt-3">
                  <Link
                    href={"/Curriculum_Anneuri.pdf"}
                    className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 "
                  >
                    Descargar CV
                  </Link>
                </button>
                <div className="roles">
                  <hr className="m-3" />
                  <div className="roles-list">
                    {roles.map((role, index) => (
                      <div className="role" key={index}>
                        <div
                          className="role-color"
                          style={{ background: role.color }}
                          onClick={() => removeRole(index)}
                        ></div>
                        <p>{role.name}</p>
                      </div>
                    ))}
                    <div className="role role-add" onClick={addRole}>
                      <div className="role-add-text cursor-pointer">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordCard;
