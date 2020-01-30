import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import FormComponent from "./form-component";
import DisplayComponent from "./displayComponent";

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <HashRouter basename="/">
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <Link to="/">Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/display">display</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route
                        path="/"
                        exact
                        render={(routeProps) => (
                            <FormComponent {...routeProps} {...this.props} />
                        )}
                    />
                    <Route
                        path="/display"
                        render={(routeProps) => (
                            <DisplayComponent {...routeProps} {...this.props} />
                        )}
                    />
                </div>
            </HashRouter>
        );
    }
}