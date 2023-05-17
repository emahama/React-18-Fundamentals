import styles from "../styles/banner.module.css";
const subtitleStyle = {
  color: "coral",
  fontStyle: "italic",
  fontSize: "x-large",
};
const Banner = ({ headerText }) => {
  return (
    <header className="row">
      <div className="col-5 mb-4">
        <img className={styles.logo} src="./GloboLogo.png" alt="logo" />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {headerText}
      </div>
    </header>
  );
};

export default Banner;
