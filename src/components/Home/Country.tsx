import * as React from "react";
import { Link, useHistory } from "react-router-dom";

import style from "../../styles/components/Home/Country.module.scss";
import { CountryType } from "../../types/definition";

interface IProps {
  name: CountryType["name"];
  population: CountryType["population"];
  region: CountryType["region"];
  capital: CountryType["capital"];
  flag: CountryType["flag"];
}

// TODO :
function Country({ name, population, region, capital, flag }: IProps) {
  const history = useHistory();
  return (
    <div
      className={`${style.container}`}
      onClick={(e) => {
        history.push(`/${name}`);
      }}
    >
      <img src={flag} className={`${style.flag}`} alt={`${name} flag`} />
      <div className={`${style.info}`}>
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  );
}

export default Country;
