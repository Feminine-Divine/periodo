import React from "react"
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import style from "./Flow.module.css"

const Flow=()=>{

    return(
        <>
        <div className={style.container1}>
        <p className={style.heading}>Blood Flow:</p>
        <StarRatingComponent 
          name="rate1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
        />
      </div>
      <div className={style.container2}>
        <p className={style.heading}>Period Pain:</p>
        <StarRatingComponent 
          name="base1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
        />
      </div>
      <div className={style.container3}>
        <p className={style.heading}>Mood:</p>
        <StarRatingComponent 
          name="mood1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
        emptyStarColor={`white`}
          />
      </div>
        <div className={style.container4}>
        <p className={style.heading}>Weakness:</p>
        <StarRatingComponent 
          name="weak1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
          />
        </div>
        <div className={style.container5}>
        <p className={style.heading}>Breast Tenderness:</p>
        <StarRatingComponent 
          name="breast1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
          />
        </div>
        <div className={style.container6}>
        <p className={style.heading}>Acne:</p>
        <StarRatingComponent 
          name="acne1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
          />
        </div>
        
        
        <div className={style.container7}>
        <p className={style.heading}>Bloating:</p>
        <StarRatingComponent 
          name="bloat1"
          val="1"
          starCount={5}
          starColor= {`yellow`}
          emptyStarColor={`white`}
          />
        </div>
   
        <div className={style.container8}>
        <p className={style.heading}>HairLoss:</p>
        <StarRatingComponent 
          name="hair1"
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

