
import React from "react";
import style from "./aboutstyle.module.css";
import Image from 'next/image'
const card=({props})=>{
        const propsList=props.map((prop)=>{
            return (
              <>
              <div className={style.card}>
                      <div className={style.h2}>
                          <h1 >{prop.aboutNumber}</h1>
                      </div>
                      <div className={style.content}>
                        <p className={style.p}>{prop.aboutContent} </p>
                      </div>
              </div>
            </>

        );
    })
    return (
      <>


        <div className={style.section}>

        <div className={style.texttop}>
        <h1 className={style.heading}>HOW WE HELP...</h1>
        <p className={style.topline}> Worried about your period arriving out of the blue?</p>
        <p className={style.subline}>Bid adieu to public embarrasment with PERIODO - a customised period tracker catering to all your needs, with a single click!</p>
        </div>
            <div className={style.body}>

              <div className={style.container}>
              <div className={style.pics}>
              <img className={style.med} src="/Medicine.svg" height="200px" width="200px" padding="10px"></img>
              <img className={style.chatbot} src="/Chatbot.svg" height="200px" width="200px" padding="10px"></img>
              <img className={style.diet} src="/Diet.svg" height="200px" width="200px" padding="10px"></img>
              <img className={style.calendar} src="/Calendar.svg" height="200px" width="200px" padding="10px"></img>
              </div>
                  {propsList}
              </div>
            </div>
        </div>
        <p className={style.bottomline}>From tracking your period flow to getting advice from both the community and experts, we strive to cover everything under the Sun to help make your next menstrual cycle less unpleasant!</p>
        </>
    );
}
export default card;
