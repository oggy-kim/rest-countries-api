import * as React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  countryListState,
  countryUrlState,
  oneCountryState,
} from "../recoil/countryList";
import style from "../styles/components/CountryDetail.module.scss";
import { CountryType } from "../types/definition";

interface IProps {
  name: string;
}

// TODO : 해당 name에 대한 정보를 불러와 보여주기
function CountryDetail({ name }: IProps) {
  const setCountryUrlState = useSetRecoilState(countryUrlState);
  React.useEffect(() => {
    setCountryUrlState(name);
  });

  const CountryDetailedInfo = () => {
    const information: CountryType = useRecoilValue(oneCountryState);
    const {
      flag,
      name,
      nativeName,
      topLevelDomain,
      population,
      currencies,
      region,
      languages,
      subregion,
      capital,
      borders,
    } = information;
    return (
      <div className={`${style.countryWrapper}`}>
        <img src={flag} className={`${style.flag}`} alt={flag} />
        <div className={`${style.information}`}>
          <h2>{name}</h2>
          <div className={`${style.detail}`}>
            <span>
              <strong>Native Name: </strong> {nativeName}
            </span>
            <span>
              <strong>TopLevel Domain: </strong> {topLevelDomain}
            </span>
            <span>
              <strong>Population: </strong>
              {population.toLocaleString()}
            </span>
            <span>
              <strong>Currencies: </strong>
              {currencies.map((currency) => {
                return currency.name;
              })}
            </span>
            <span>
              <strong>Region: </strong>
              {region}
            </span>
            <span>
              <strong>Languagues: </strong>
              {languages.map((language) => {
                return language.name;
              })}
            </span>
            <span>
              <strong>Sub Region: </strong>
              {subregion}
            </span>
            <span>
              <strong>Capital: </strong>
              {capital}
            </span>
          </div>
          <div>
            Border Countries :{" "}
            {borders.map((border) => {
              const countryName = findCountryName(border);
              return (
                <span
                  className={`${style.borderCountry}`}
                  onClick={(e) => history.push(`/${countryName}`)}
                >
                  {countryName}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const countryList = useRecoilValue(countryListState);
  const findCountryName = (alpha3Code: string) => {
    const res = countryList.find((country) => {
      return alpha3Code === country.alpha3Code;
    });
    return res!.name;
  };

  const history = useHistory();
  return (
    <div className={`${style.container}`}>
      <div className={`${style.backbutton}`} onClick={(e) => history.goBack()}>
        🔙 Back
      </div>
      <React.Suspense fallback={null}>
        <CountryDetailedInfo />
      </React.Suspense>
    </div>
  );
}

export default CountryDetail;
