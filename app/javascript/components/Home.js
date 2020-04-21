import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Home, Map State to Props: ", state);
  const currentUser = state.user;
  const products = state.products;
  return {
    currentUser,
    products,
  };
};

export default connect(mapStateToProps)(Home);
