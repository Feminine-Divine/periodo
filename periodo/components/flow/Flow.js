import React from "react"
// import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import style from "./Flow.module.css"

const Flow=()=>{

    return(
        <>
        <div className={style.container}>
        <p className={style.heading}>Blood Flow:</p>
        <StarRatingComponent 
          name="rate1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
        />
      </div>
      <div className={style.container}>
        <p className={style.heading}>Period Pain:</p>
        <StarRatingComponent 
          name="base1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
        />
      </div>
      <div className={style.container}>
        <p className={style.heading}>Mood:</p>
        <StarRatingComponent 
          name="mood1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
          />
      </div>
      
      </>
    )
}

export default Flow

