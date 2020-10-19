import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Button(props) {
return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
`;

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
