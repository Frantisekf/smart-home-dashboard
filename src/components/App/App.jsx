import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function App(props) {
  return <Wrapper className={styles.App}></Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
`;

App.propTypes = {
  name: PropTypes.string,
};

export default App;
