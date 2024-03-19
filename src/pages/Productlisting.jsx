import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../Context/Firebase";

function Productlisting() {
  const firebase = useFirebase();

  const [name, setName] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(coverPic);
    await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic);
  };

  return (
    <div className="container mt-5">
      <Row>
        <Col sm={6} className="mx-auto border p-4 rounded shadow  ">
          <Form onClick={handleSubmit}>
            <h1 className="text-center mb-2 ">Product Listing</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter Your Product Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>ISBN Number</Form.Label>
              <Form.Control
                onChange={(e) => setIsbnNumber(e.target.value)}
                value={isbnNumber}
                type="text"
                placeholder="Enter Your ISBN Number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="Number"
                placeholder="Enter Your Product Price"
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Cover Pic</Form.Label>
              <Form.Control
                onClick={(e) => setCoverPic(e.target.files[0])}
                type="file"
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Create
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Productlisting;
