import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: "burlywood" }}>
                <Container>
                    <Link to="/">
                        {" "}
                        <Navbar.Brand  style={{color:"brown", fontFamily:"cursive"}} href="home">Workshop API</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                style={{
                                    color: "brown",
                                    fontFamily: "cursive",
                                }}
                                href="/"
                            >
                                Home
                            </Nav.Link>

                            <Nav.Link
                                style={{
                                    color: "brown",
                                    fontFamily: "cursive",
                                }}
                                href="/userlist"
                            >
                                UserList
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
