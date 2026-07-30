import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

const Navigation = () => {
  let navigate = useNavigate();
  return (
    <div className="nav">
      <Navbar className="navbar" bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="head">
            <img
              className="logo"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9VpuO6K9rKaX4u-bpNcyiKS7t7VFfaa9_-BCXwKGiuJwG9qwQ"
              alt=""
            />
            FootyPlus
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="me-auto1">
              <h6>Home</h6>
            </Nav.Link>
            <Nav.Link as={Link} to="/teams" className="me-auto1">
              <h6>Teams</h6>
            </Nav.Link>
            <Nav.Link as={Link} to="/players" className="me-auto1">
              <h6>Players</h6>
            </Nav.Link>
          </Nav>
          <button
            className="button "
            onClick={() => navigate("/favoriteplayer")}
          >
            <span>
              <MdFavoriteBorder />{" "}
            </span>
            <h5>Favourite</h5>
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
