import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <div className="flex items-center">
            <p className="flex items-center text-blue-400 font-poppins text-1xl font-semibold leading-normal">
              &lt;
            </p>
            <h1 className="text-1xl">ANNEURI</h1>
            <p></p>
            <p className="flex items-center text-blue-400 font-poppins text-1xl font-semibold leading-normal">
              /&gt;
            </p>
          </div>
        <p className="text-slate-600">#HECHO CON 💖(CÓDIGO) POR MI</p>
      </div>
    </footer>
  );
};

export default Footer;
