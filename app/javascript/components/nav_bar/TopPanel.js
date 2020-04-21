import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  items: 1,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
};

class TopPanel extends React.Component {
  state = {
    display: false,
    panel: true,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    let { panel } = this.state;
    return (
      <div className={`top-panel ${panel ? "" : "hide"}`}>
        <div className="container">
          <div className="panel-content">
            {this.state.display ? (
              <OwlCarousel
                className="top-panel-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="single-item-box">
                  <p>
                    <strong>Enjoy an extra 20% off</strong> select sales styles{" "}
                    <Link to="/">Read More</Link>
                  </p>
                </div>

                <div className="single-item-box">
                  <p>
                    <strong>Enjoy an extra 20% off</strong> select sales styles{" "}
                    <Link to="/">Read More</Link>
                  </p>
                </div>

                <div className="single-item-box">
                  <p>
                    <strong>Enjoy an extra 20% off</strong> select sales styles{" "}
                    <Link to="/">Read More</Link>
                  </p>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}

            <i
              onClick={() => this.setState({ panel: false })}
              className="fas fa-times panel-close-btn"
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default TopPanel;
