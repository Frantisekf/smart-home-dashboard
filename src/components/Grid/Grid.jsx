import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Grid(props) {
  return <Wrapper className={styles.style}></Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
`;

Grid.propTypes = {
  name: PropTypes.string,
};

export default Grid;
