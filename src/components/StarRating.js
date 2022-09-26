import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating1 = () => {
    return[
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="grey" />,
        <FaStar color="grey" />
    ]
      
}

const Star = ({ selected = false }) => (
    <FaStar color = {selected ? 'red' : 'grey' } />
)

const createArray = length => [...Array(length)];

const StarRating = ( {totalStars = 5} ) => {
    
    return createArray(totalStars).map((n,i) => <Star key={i} /> );
}

export default StarRating;