import { useState } from "react";
import City from "./city";

const CityList = ({ cities }) => {
  let [activeCity, setActiveCity] = useState([]);

  let handleEvent = (event, city) => {
    let selectedCities = [...activeCity, city];
    setActiveCity(selectedCities);
  };

  return (
    <ul className="list-group text-start">
      {cities.map((city) => (
        <City
          key={city}
          city={city}
          active={activeCity.includes(city)}
          handelClickEvent={(event) => handleEvent(event, city)}
        ></City>
      ))}
    </ul>
  );
};

export default CityList;
