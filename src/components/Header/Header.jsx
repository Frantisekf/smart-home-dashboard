import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Header({ leftSlot }) {
  return (
    <Wrapper>
      <Container>
        <span>{leftSlot}</span>
        <span>Date</span>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

Header.propTypes = {
  /**
   * Renders a react node on the left portion of Header.
   */
  leftSlot: PropTypes.node,
};

export default Header;
