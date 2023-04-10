import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";

const Cards = ({ meal }) => {
  const {idMeal,strMeal,strMealThumb,strInstructions} = meal;
  const navigate = useNavigate()
  const handleDetails = () => {
    navigate(`/foodDetails/${idMeal}`)
  }
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
          {
            strInstructions.length > 50 ? strInstructions.slice(0,50) + "..." : strInstructions
          }
          </Card.Text>
          <Button onClick={handleDetails} variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
