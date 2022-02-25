import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import FeatureSection from "./FeatureSection";


function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <FeatureSection />

    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
