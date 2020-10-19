import React from "react";
import styles from "./App.module.scss";
import PropTypes from "prop-types";

function App(props) {
  return <div className={styles.App}></div>;
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
