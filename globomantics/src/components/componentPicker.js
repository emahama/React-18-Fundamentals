import House from "./House";
import HouseList from "./HouseList";
import navValues from "./helpers/navValues";

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <House />;
    default:
      <h3>No component for navigation value {currentNavLocation} found;</h3>;
  }
};

export default ComponentPicker;
