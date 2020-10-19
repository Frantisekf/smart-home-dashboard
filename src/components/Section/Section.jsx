import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Section(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
`;

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
