import "assets/styles/bootstrap.min.css";
import "assets/styles/fontawesome.min.css";
import "assets/styles/animate.min.css";
import "assets/styles/slick.css";
import "assets/styles/slick-theme.css";
import "assets/styles/style.css";
import "assets/styles/responsive.css";

import "react-toastify/dist/ReactToastify.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";

import React from "react";
import PropTypes from "prop-types";
import { Button, Alert, Form, Jumbotron } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import GoTop from "./shared/GoTop";
import NavBar from "./nav_bar/NavBar";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <NavBar />
              <h1>Hello Main App</h1>
              <Link to="/" style={{ textDecoration: "none", padding: 10 }}>
                Home
              </Link>
              <Link to="/login" style={{ textDecoration: "none", padding: 10 }}>
                Login
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", padding: 10 }}
              >
                Register
              </Link>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => {
                    return <Home />;
                  }}
                />
                <Route
                  exact
                  path="/register"
                  render={(props) => {
                    return <Register />;
                  }}
                />

                <Route
                  exact
                  path="/login"
                  render={(props) => {
                    return <Login />;
                  }}
                />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
          <Jumbotron>
            <Alert variant="success">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </Alert>
          </Jumbotron>
          <Jumbotron>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Jumbotron>
          <GoTop scrollStepInPx="50" delayInMs="10.50" />
        </Provider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string,
};
export default App;
