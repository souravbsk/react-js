import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useLoaderData,useNavigate,useNavigation } from "react-router-dom";

const CardDetails = () => {
  const { meals } = useLoaderData();
      const { idMeal, strMeal, strMealThumb, strInstructions } = meals[0];
  
  const navigate = useNavigate()

  const handleBackToCart = () => {
    navigate(-1)
  }

  return (
    <div className="container mt-5">
      <Col>
        <Card className="d-flex flex-row">
          <Card.Img className="w-25" variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>{strInstructions}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <div className="text-center mt-5">
        <Button onClick={handleBackToCart}>Back To Cards</Button>
      </div>
    </div>
  );
};

export default CardDetails;
