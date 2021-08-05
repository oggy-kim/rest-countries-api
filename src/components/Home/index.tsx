import * as React from "react";
import Country from "./Country";
import Searchbar from "./Searchbar";

// TODO : useEffect 활용하여 현재 countryList 불러오기
function Home() {
  return (
    <div>
      <Searchbar />

      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </div>
  );
}

export default Home;
