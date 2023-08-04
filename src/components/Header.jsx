/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import { headerNav } from "../constants";

function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="headerInner">
        <div className="headerLogo">
          <a href="/">
            portfolio<em>react.js</em>
          </a>
        </div>
        <nav
          className={`headerNavs ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="headerNavMobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
        >
          <span />
        </div>
      </div>
    </header>
  );
}

export default Header;
