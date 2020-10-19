import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";

function App(props) {
  return (
    <Section>
      <Header></Header>
    </Section>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
