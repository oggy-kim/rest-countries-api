export type CountryType = {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: CurrencyType[];
  demonym: string;
  flag: string;
  gini: number;
  languages: LanguagesType[];
  latlng: [number, number];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: Object[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: Object[];
};

export type LanguagesType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type CurrencyType = {
  code: string;
  name: string;
  symbol: string;
};
