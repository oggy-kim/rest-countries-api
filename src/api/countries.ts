import axios from "axios";

const getAllCountries = async () => {
  return await axios.get(`https://restcountries.eu/rest/v2/all`);
};

const getOneCountryInfo = async (name: string) => {
  return await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
};

export { getAllCountries, getOneCountryInfo };
