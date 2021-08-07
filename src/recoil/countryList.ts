import { atom, selector } from "recoil";
import { getAllCountries, getOneCountryInfo } from "../api/countries";
import { CountryType } from "../types/definition";

const countryListFilterState = atom({
  key: "countryListFilterState",
  default: "Show All",
});

const countryUrlState = atom({
  key: "countryUrlState",
  default: "",
});

const countrySearchState = atom({
  key: "countrySearchState",
  default: "",
});

const countryListState = selector({
  key: "countryListState",
  get: async () => {
    const { data }: { data: CountryType[] } = await getAllCountries();
    return data;
  },
});

const filteredCountryListState = selector({
  key: "filteredCountryListState",
  get: async ({ get }) => {
    const filter = get(countryListFilterState);
    const searchValue = get(countrySearchState);
    const countryList = get(countryListState);

    let filteredList = countryList;
    if (searchValue.length > 0) {
      filteredList = countryList.filter(({ name }) =>
        name.includes(searchValue)
      );
    }

    if (filter !== "Show All") {
      return filteredList.filter(({ region }) => region.includes(filter));
    }
    return filteredList;
  },
});

const oneCountryState = selector({
  key: "oneCountryState",
  get: async ({ get }) => {
    const name = get(countryUrlState);
    const { data } = await getOneCountryInfo(name);
    return data[0];
  },
});

export {
  countrySearchState,
  countryListFilterState,
  countryListState,
  oneCountryState,
  filteredCountryListState,
  countryUrlState,
};
