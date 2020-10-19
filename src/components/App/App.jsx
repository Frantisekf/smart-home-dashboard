import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function App(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
`;

App.propTypes = {
  children: PropTypes.node,
};

export default App;
