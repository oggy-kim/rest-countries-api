import * as React from "react";
import style from "../styles/components/Header.module.scss";

// TODO : context API를 활용해서 dark mode 전체에 공유하는 로직
function Header() {
  return (
    <div className={`${style.header}`}>
      <p>Where in the world?</p>
      <p>🌙 Dark Mode</p>
    </div>
  );
}

export default Header;
