import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Tabs(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Tabs = styled.div`
  display: inline-block;
`;

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
