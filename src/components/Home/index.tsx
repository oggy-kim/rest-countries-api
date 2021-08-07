import * as React from "react";
import { useRecoilValue } from "recoil";
import { filteredCountryListState } from "../../recoil/countryList";
import Country from "./Country";
import Searchbar from "./Searchbar";
import style from "../../styles/components/Home/index.module.scss";

// TODO : useEffect 활용하여 현재 countryList 불러오기
function Home() {
  const CountryList = () => {
    const countryList = useRecoilValue(filteredCountryListState);

    return (
      <div className={`${style.countryWrapper}`}>
        {countryList.map(({ name, population, region, capital, flag }) => {
          return (
            <Country
              name={name}
              population={population}
              region={region}
              capital={capital}
              flag={flag}
            />
          );
        })}
      </div>
    );
  };

  // TODO: loading 관련 spinner 구현
  return (
    <div>
      <Searchbar />
      <React.Suspense fallback={<div>Loading..</div>}>
        <CountryList />
      </React.Suspense>
    </div>
  );
}

export default Home;
