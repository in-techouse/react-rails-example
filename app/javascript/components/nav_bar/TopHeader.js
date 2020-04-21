import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Wishlist from "../Modal/Wishlist";

class TopHeader extends Component {
  state = {
    display: false,
  };

  handleWishlist = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="top-header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <ul className="top-header-nav">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/">Our Stores</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 col-md-6">
                <ul className="top-header-right-nav">
                  <li>
                    <Link to="#">
                      {/* <a
                        data-toggle="modal"
                        data-target="#shoppingWishlistModal"
                        onClick={(e) => {
                          e.preventDefault();
                          this.handleWishlist();
                        }}
                      > */}
                      Wishlist <i className="far fa-heart"></i>
                      {/* </a> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/compare">
                      Compare <i className="fas fa-balance-scale"></i>
                    </Link>
                  </li>
                  <li>
                    <div className="languages-list">
                      <select>
                        <option value="1">Eng</option>
                        <option value="2">Ger</option>
                        <option value="3">Span</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ""} */}
      </React.Fragment>
    );
  }
}

export default TopHeader;
