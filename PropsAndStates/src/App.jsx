import "./App.css";
import CityList from "./components/CityList";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import CityInput from "./components/CityInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextState] = useState();
  let [cities, setCities] = useState([]);
  let handleEvent = (event) => {
    if (event.key === "Enter") {
      let newCity = event.target.value;
      event.target.value = "";
      let cityList = [...cities, newCity];
      setCities(cityList);
    }
  };
  return (
    <Container>
      <h1>Cities</h1>
      <CityInput handleOnChangeEvent={handleEvent}></CityInput>
      <ErrorMessage cities={cities}></ErrorMessage>
      <p>{textToShow}</p>
      <CityList cities={cities}></CityList>
    </Container>
  );
}

export default App;
