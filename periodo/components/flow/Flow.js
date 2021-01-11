import React from "react"
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

const Flow=()=>{

    return(
        <div>
        <p>Blood Flow:</p>
        <StarRatingComponent 
          name="rate1"
          val="1"
          starCount={5}
          starColor= {`black`}
          emptyStarColor={`white`}
        />
      </div>
    )
}

export default Flow

