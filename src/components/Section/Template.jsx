import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Template(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
`;

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
