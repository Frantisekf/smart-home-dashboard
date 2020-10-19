import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Template(props) {
  return <Wrapper className={styles.style}></Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
`;

Template.propTypes = {
  name: PropTypes.string,
};

export default Template;
