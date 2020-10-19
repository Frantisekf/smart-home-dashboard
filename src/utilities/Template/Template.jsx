import React from "react";
import styles from "./Template.module.scss";
import PropTypes from "prop-types";

function Template(props) {
  return <div className={styles.style}></div>;
}

Template.propTypes = {
  name: PropTypes.string,
};

export default Template;
