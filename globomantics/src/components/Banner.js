import { useContext } from "react";
import styles from "../styles/banner.module.css";
import { navigationContext } from "../App";
import navValues from "./helpers/navValues";
const subtitleStyle = {
  color: "coral",
  fontStyle: "italic",
  fontSize: "x-large",
};
const Banner = ({ headerText }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <header className="row">
      <div className="col-5 mb-4">
        <img
          onClick={() => navigate(navValues.home)}
          className={styles.logo}
          src="./GloboLogo.png"
          alt="logo"
        />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {headerText}
      </div>
    </header>
  );
};

export default Banner;
