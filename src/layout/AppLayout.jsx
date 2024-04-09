import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import './AppLayout.style.css'
import MovieSlider from "../common/MovieSlider/MovieSlider";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()
  const searchByKeyword = (event) => {
    event.preventDefault()
    // URL을 바꿔주기
    navigate(`/movies?q=${keyword}`)
    setKeyword('')
  }
  return (
    <div>
      <Navbar expand="lg" className="navbar" bg="black" data-bs-theme="dark">
        <Container fluid>
          <img className="logo" href="#" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
              <Nav.Link href="/movies" style={{color: "white"}}>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                // 입력할때마다 세팅
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
