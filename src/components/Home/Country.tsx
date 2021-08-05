import * as React from "react";
import { Link } from "react-router-dom";

import style from "../../styles/components/Home/Country.module.scss";

// TODO :
function Country() {
  return (
    <Link to="/somewhere">
      <div className={style.container}>
        <div className={style.flag}>국기</div>
        <div className={style.info}>
          <p>나라이름</p>
          <p>Population: dddd</p>
          <p>Region: Europe</p>
          <p>Capital: Berlin</p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
