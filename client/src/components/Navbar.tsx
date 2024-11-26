import React, { useState } from "react";

export default function Navbar() {
  const [navbarBurgerToggled, setNavbarBurgerToggled] = useState(false);

  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <a
          href="/"
          className="navbar-item"
          onClick={() => setNavbarBurgerToggled(!navbarBurgerToggled)}
        >
          <h1 className="is-size-5">React App</h1>
        </a>
        <a
          className="navbar-burger burger"
          onClick={() => setNavbarBurgerToggled(!navbarBurgerToggled)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  );
}
