import "../src/styles/App.css";
import Banner from "../src/components/Banner";
import HouseList from "./components/HouseList";
import { useState } from "react";
import House from "./components/House";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    setSelectedHouse(house);
  };

  return (
    <>
      <Banner headerText="Providing houses all over the world" />
      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouseWrapper} />
      )}
    </>
  );
};

export default App;
