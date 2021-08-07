import * as React from "react";
import { useRecoilState } from "recoil";
import {
  countryListFilterState,
  countrySearchState,
} from "../../recoil/countryList";

import style from "../../styles/components/Home/Searchbar.module.scss";

// TODO : 활용하여, 검색창 및 선택박스 변경 시 countryList 변경
function Searchbar() {
  const [searchValue, setSearchValue] = useRecoilState(countrySearchState);
  const [filter, setFilter] = useRecoilState(countryListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;
    setFilter(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchValue(value);
  };

  return (
    <div className={`${style.container}`}>
      <div className={`${style.searchInput}`}>
        <span>🔍</span>
        <input
          className={`${style.inputElement}`}
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search for a country..."
        />
      </div>
      <select
        className={`${style.filterOption}`}
        value={filter}
        onChange={updateFilter}
      >
        <option value="Show All" selected disabled hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Searchbar;
