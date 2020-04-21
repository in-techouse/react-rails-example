import React from "react";
import PropTypes from "prop-types";
import TopPanel from "./TopPanel";
import TopHeader from "./TopHeader";
import MegaMenu from "./MegaMenu";

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopPanel />
        <div className="header-area">
          <TopHeader />
          <MegaMenu />
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
