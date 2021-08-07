import * as React from "react";
import { Link } from "react-router-dom";
import style from "../styles/components/Header.module.scss";

function Header() {
  // TODO: 토글 클릭 시 그에 대한 theme 변경(context API)
  const handleToggle = () => {
    console.log("theme");
  };

  return (
    <div className={`${style.header}`}>
      <Link to="/">
        <h2>Where in the world?</h2>
      </Link>
      <div className={`${style.theme}`} onClick={handleToggle}>
        🌙 Dark Mode
      </div>
    </div>
  );
}

export default Header;
