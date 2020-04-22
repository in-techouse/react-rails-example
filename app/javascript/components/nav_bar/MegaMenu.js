import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Cart from '../Modal/Cart';

class MegaMenu extends Component {
  state = {
    display: false,
    searchForm: false,
    collapsed: true,
  };

  handleCart = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    let { products } = this.props;
    return (
      <React.Fragment>
        <div className="navbar-area bg-black">
          <div id="navbar" className="comero-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/">
                  {/* <a className="navbar-brand"> */}
                  <img src={require("images/white-logo.png")} alt="logo" />
                  {/* </a> */}
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item p-relative">
                      <Link to="/">
                        {/* <a className="nav-link active"> */}
                        Home
                        {/* <i className="fas fa-chevron-down"></i> */}
                        {/* </a> */}
                      </Link>
                    </li>

                    <li className="nav-item megamenu">
                      <Link to="#">
                        {/* <a className="nav-link"> */}
                        Shop <i className="fas fa-chevron-down"></i>
                        {/* </a> */}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">
                                  Collection Layouts
                                </h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/collections-style-one">
                                      {/* <a> */}
                                      Collections Type 1{/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/collections-style-two">
                                      {/* <a> */}
                                      Collections Type 2{/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      {/* <a> */}
                                      Left Sidebar
                                      {/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      {/* <a> */}
                                      Left Sidebar With HTML Block
                                      {/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      {/* <a> */}
                                      Right Sidebar
                                      {/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      {/* <a> */}
                                      Right Sidebar With HTML Block
                                      {/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      {/* <a> */}
                                      Without Sidebar
                                      {/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      {/* <a> */}
                                      With Sidebar Full Width
                                      {/* </a> */}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      {/* <a> */}
                                      Without Sidebar Full Width
                                      {/* </a> */}
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Other Pages</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/cart">Cart</Link>
                                  </li>

                                  <li>
                                    <Link to="/checkout">Checkout</Link>
                                  </li>

                                  <li>
                                    <Link to="/compare">Compare</Link>
                                  </li>

                                  <li>
                                    <Link to="/login">Login</Link>
                                  </li>

                                  <li>
                                    <Link to="/signup">Signup</Link>
                                  </li>

                                  <li>
                                    <Link to="/product-details">
                                      Product Details
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/customer-service">
                                      Customer Service
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Top Brands</h6>

                                <ul className="megamenu-submenu top-brands">
                                  <li>
                                    <Link to="#">
                                      <img
                                        src={require("../../images/partner1.png")}
                                        alt="image"
                                      />
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="#">
                                      <img
                                        src={require("../../images/partner2.png")}
                                        alt="image"
                                      />
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="#">
                                      <img
                                        src={require("../../images/partner3.png")}
                                        alt="image"
                                      />
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="#">
                                      <img
                                        src={require("../../images/partner4.png")}
                                        alt="image"
                                      />
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="#">
                                      <img
                                        src={require("../../images/partner5.png")}
                                        alt="image"
                                      />
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="#">
                                      <img
                                        src={require("../../images/partner6.png")}
                                        alt="image"
                                      />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link to="#">
                        {/* <a className="nav-link"> */}
                        Women's <i className="fas fa-chevron-down"></i>
                        {/* </a> */}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">Clothing</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      Coats
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Jackets
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Blazer
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Dresses
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Trousers
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      Jeans
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Sweatshirts
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      T-Shirts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Shoes</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      Trainers
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Boots
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Heels
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Flats
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      Heeled Sandals
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Platforms
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Accessories</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Bags
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Glasses
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      Jewellery
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      iPhone Cases
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Gadgets
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Hats & Beanie
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      Purses
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <ul className="megamenu-submenu">
                                  <li>
                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/category-products-img2.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Top Trending</h4>
                                      </div>

                                      <a to="#"></a>
                                    </div>

                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/category-products-img3.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Popular Products</h4>
                                      </div>

                                      <a to="#"></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link to="#">
                        {/* <a className="nav-link"> */}
                        Men's <i className="fas fa-chevron-down"></i>
                        {/* </a> */}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">Clothing</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Coats
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Jackets
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Jeans
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      T-Shirts
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Sweatshirts
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Knitwear
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Shirts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Shoes</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      Trainers
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Boots
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Heels
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Flats
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Heeled Sandals
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      Sandals
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Platforms
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Heeled Sandals
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Accessories</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Bags
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Backpacks
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Glasses
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Earrings
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      iPhone Cases
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Mobile Accessories
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      Socks
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <ul className="megamenu-submenu">
                                  <li>
                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/category-products-img2.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Top Trending</h4>
                                      </div>
                                      <Link to="#"></Link>
                                    </div>

                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/category-products-img3.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Popular Products</h4>
                                      </div>

                                      <Link to="#"></Link>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link to="#">
                        {/* <a className="nav-link"> */}
                        Today's Deals <i className="fas fa-chevron-down"></i>
                        {/* </a> */}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <h6 className="submenu-title">Clothing</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Coats
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Jackets
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Jeans
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      T-Shirts
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Sweatshirts
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Knitwear
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Shirts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Shoes</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      Trainers
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      Boots
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Heels
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Flats
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Heeled Sandals
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar-with-block">
                                      Sandals
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar-with-block">
                                      Platforms
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Heeled Sandals
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <h6 className="submenu-title">Accessories</h6>

                                <ul className="megamenu-submenu">
                                  <li>
                                    <Link to="/category-without-sidebar">
                                      Bags
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Backpacks
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Glasses
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-left-sidebar">
                                      Earrings
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-sidebar-fullwidth">
                                      iPhone Cases
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-right-sidebar">
                                      Mobile Accessories
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/category-without-sidebar-fullwidth">
                                      Socks
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="col">
                                <ul className="megamenu-submenu">
                                  <li>
                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/category-products-img2.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Top Trending</h4>
                                      </div>
                                      <Link to="#"></Link>
                                    </div>

                                    <div className="aside-trending-products">
                                      <img
                                        src={require("../../images/category-products-img3.jpg")}
                                        alt="image"
                                      />

                                      <div className="category">
                                        <h4>Popular Products</h4>
                                      </div>

                                      <Link to="#"></Link>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item p-relative">
                      <Link to="#">
                        {/* <a className="nav-link"> */}
                        Pages <i className="fas fa-chevron-down"></i>
                        {/* </a> */}
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/about">
                            {/* <a className="nav-link"> */}
                            About Us
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/sizing-guide">
                            {/* <a className="nav-link"> */}
                            Sizing Guide
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/gallery">
                            {/* <a className="nav-link"> */}
                            Gallery
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <a to="#" className="nav-link">
                            Account
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link to="/login">
                                {/* <a className="nav-link"> */}
                                Login
                                {/* </a> */}
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link to="/signup">
                                {/* <a className="nav-link"> */}
                                Signup
                                {/* </a> */}
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link to="/cart">
                                {/* <a className="nav-link"> */}
                                Cart
                                {/* </a> */}
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link to="/cart">
                            {/* <a className="nav-link"> */}
                            Cart
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/checkout">
                            {/* <a className="nav-link"> */}
                            Checkout
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/compare">
                            {/* <a className="nav-link"> */}
                            Compare
                            {/* </a> */}
                          </Link>
                        </li>

                        <li>
                          <Link to="/product-details">Product Details</Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/customer-service">
                            {/* <a className="nav-link"> */}
                            Customer Service
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/login">
                            {/* <a className="nav-link"> */}
                            Login
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/signup">
                            {/* <a className="nav-link"> */}
                            Signup
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/faq">
                            {/* <a className="nav-link"> */}
                            FAQs
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/error">
                            {/* <a className="nav-link"> */}
                            Error 404
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/contact-us">
                            {/* <a className="nav-link"> */}
                            Contact Us
                            {/* </a> */}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item p-relative">
                      <Link to="#">
                        {/* <a className="nav-link"> */}
                        Blog <i className="fas fa-chevron-down"></i>
                        {/* </a> */}
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/blog">
                            {/* <a className="nav-link"> */}
                            Blog Grid (3 in Row)
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/blog2">
                            {/* <a className="nav-link"> */}
                            Blog Grid (2 in Row)
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/blog3">
                            {/* <a className="nav-link"> */}
                            Blog Grid (1 in Row)
                            {/* </a> */}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/blog-details">
                            {/* <a className="nav-link"> */}
                            Blog Details
                            {/* </a> */}
                          </Link>

                          <Link to="/blog-details-two">
                            {/* <a className="nav-link"> */}
                            Blog Details Two
                            {/* </a> */}
                          </Link>

                          <Link to="/blog-details-three">
                            {/* <a className="nav-link"> */}
                            Blog Details Three
                            {/* </a> */}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="others-option">
                    <div className="option-item">
                      <i
                        onClick={this.handleSearchForm}
                        className="search-btn fas fa-search"
                        style={{
                          display: this.state.searchForm ? "none" : "block",
                        }}
                      ></i>

                      <i
                        onClick={this.handleSearchForm}
                        className={`close-btn fas fa-times ${
                          this.state.searchForm ? "active" : ""
                        }`}
                      ></i>

                      <div
                        className="search-overlay search-popup"
                        style={{
                          display: this.state.searchForm ? "block" : "none",
                        }}
                      >
                        <div className="search-box">
                          <form className="search-form">
                            <input
                              className="search-input"
                              name="search"
                              placeholder="Search"
                              type="text"
                            />
                            <button className="search-button" type="submit">
                              <i className="fas fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="option-item">
                      <Link to="/login">Login</Link>
                    </div>

                    <div className="option-item">
                      <Link to="#">
                        {/* <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleCart();
                          }}
                        > */}
                        Cart({products.length}){" "}
                        <i className="fas fa-shopping-bag"></i>
                        {/* </a> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* {this.state.display ? <Cart onClick={this.handleCart} /> : ''} */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(MegaMenu);
