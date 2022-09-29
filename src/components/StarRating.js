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

const Star1 = ({ selected = false }) => (
    <FaStar color = {selected ? 'red' : 'grey' } />
)

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color = {selected ? 'red' : 'grey' } onClick={onSelect} />
)


const createArray = length => [...Array(length)];

const StarRating2 = ( {totalStars = 5} ) => {
    
    return createArray(totalStars).map((n,i) => <Star1 key={i} /> );
}

const StarRating3 = ( {totalStars = 5} ) => {

    const [selectedStars] = useState(3);
    
    return(
        <>
            {createArray(totalStars).map((n,i) => 
            ( <Star1 key={i} selected = {selectedStars > i} /> ) )}

            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    ) ;
    
    
}

const StarRating = ( {style= {}, totalStars = 5} ) => {

    const [selectedStars, setSelectedStars] = useState(0);
    
    return(
        <div style={{padding: "5px", ...style}}>
            {createArray(totalStars).map((n,i) => 
            ( 
            <Star 
            key={i} 
            selected = {selectedStars > i} 
            onSelect = { () => setSelectedStars(i + 1) }
            /> ) )}

            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    ) ;
    
    
}

export default StarRating;