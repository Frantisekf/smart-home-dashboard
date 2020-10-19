import React from "react";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";

function Header(props) {
  return <div className={styles.style}></div>;
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
