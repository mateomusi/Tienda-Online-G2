// Header.js

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        {/* Aquí puedes colocar tu logo y nombre de empresa */}
        <div className="header__logo">
          <img src="/images/logoG2.webp" />
        </div>
      </div>

      <div className="header__center">
        {/* Barra de búsqueda */}
        <input type="text" placeholder="Buscar..." className="header__search" />
      </div>

      <div className="header__right">
        {/* Botón para hacer el login */}
        <button className="header__login">Iniciar Sesion</button>
        <span> | </span>
        {/* Icono o botón para el carrito de compras */}
        <button className="header__cart">Carrito</button>
      </div>
    </header>
  );
};

export default Header;
