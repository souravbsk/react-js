import React from 'react';
import {
    useLoaderData,
  } from "react-router-dom";
import Card from '../Card/Card';
import Cards from '../Card/Card';
import { Row } from 'react-bootstrap';
  

const FoodCard = () => {
    const {meals} = useLoaderData();
    console.log(meals);
    return (
        <div className='container mt-5'>
             <Row xs={1} md={4} className="g-4">
            {
                meals.map(meal => <Cards key={meal.idMeal} meal={meal}></Cards>)
            }
            </Row>
        </div>
    );
};

export default FoodCard;