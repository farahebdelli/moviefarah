import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddMovie from "../AddMovie/AddMovie";
import Filter from "../Filter/Filter";

const NavBar = ({
  setRatingChange,
  setSearchInput,
  ratingChange,
  newMovie,
  setNewMovie,
  handleSave,
  movieData,
  searchInput,
}) => {
  const ratingChanged = (rating) => {
    setRatingChange(rating);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="dark align-items-baseline" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Button variant="light" onClick={handleShow}>
            {" "}
            Add new movie
          </Button>{" "}
        </Container>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            search
          </InputGroup.Text>
          <Form.Control
            onChange={handleChange}
            aria-label="default"
            aria-describedby="inputGroup-sizing-default"
          />
          <ReactStars
            count={5}
            value={ratingChange}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </InputGroup>{" "}
      </Navbar>
      <Filter
        ratingChange={ratingChange}
        searchInput={searchInput}
        movieData={movieData}
      />
      <AddMovie
        show={show}
        handleClose={handleClose}
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        handleSave={handleSave}
        setShow={setShow}
      />
    </div>
  );
};

export default NavBar;
