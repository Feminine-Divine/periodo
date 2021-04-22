import React from "react";
import style from "./aboutstyle.module.css";
import Image from "next/image";
const card = ({ props }) => {
  const propsList = props.map((prop) => {
    return (
      <>
        <div className={style.card}>
          <div className={style.h2}>
            <h1>{prop.aboutNumber}</h1>
          </div>
          <img src={prop.imgsrc} height="200px" width="200px" padding="10px" />
          <div className={style.content}>
            <p className={style.p}>{prop.aboutContent} </p>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className={style.section}>
        <div className={style.texttop}>
          <div className={style.heading}>HOW WE HELP...</div>
          <div className={style.topline}>
            {" "}
            Worried about your period arriving out of the blue?
          </div>
          <div className={style.subline}>
            Bid adieu to public embarrasment with PERIODO - a customised period
            tracker catering to all your needs, with a single click!
          </div>
        </div>
        <div className={style.body}>
          <div className={style.container}>{propsList}</div>
        </div>
      </div>
      <p className={style.bottomline}>
        From tracking your period flow to getting advice from both the community
        and experts, we strive to cover everything under the Sun to help make
        your next menstrual cycle less unpleasant!
      </p>
    </>
  );
};
export default card;
