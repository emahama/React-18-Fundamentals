import "../src/styles/App.css";
import Banner from "../src/components/Banner";
import HouseList from "./components/HouseList";
import { Component, useCallback, useState } from "react";
import House from "./components/House";
import navValues from "../src/components/helpers/navValues";
import React from "react";
import ComponentPicker from "../src/components/componentPicker";

const navigationContext = React.createContext(navValues.home);

const App = () => {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );
  const [nav, setNav] = useState({ current: navValues.home, navigate });
  return (
    <navigationContext.Provider value={nav}>
      <Banner headerText="Providing houses all over the world" />
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
};
export { navigationContext };

export default App;
