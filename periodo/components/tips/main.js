import React from 'react';
import style from "./cards.module.css";

export default function main() {
    return (
    <div className={style.intro}>
        <h1>| SOME TIPS FOR YOU |</h1>
        <div className={style.container} style={{marginLeft:"200px"}}>
            <div className={style.card2}>
            <h2>
                For Teenage Girls
            </h2>
            <button className={style.btn}>
                <a href="/tips2" >What Is Sanitary Napkin</a>
            </button>
            <button className={style.btn}>
                <a href="/tips">Things To Do In Periods</a>
            </button>
            <button className={style.btn}>
                <a href="/tips3">Things To Avoid In Periods</a>
            </button>
            <button className={style.btn}>
                <a href="/tips4">Time To Change Napkin</a>
            </button>
            </div>
            <div className={style.card3}>
            <h2>
                For Young Ladies
            </h2>
            <button className={style.btn}>
                <a href="/tips1" >Napkin Vs Cloths</a>
            </button>
            <button className={style.btn}>
                <a href="/tips2" >Which Napkin Should Use</a>
            </button>
            <button className={style.btn}>
                <a href="/tips3" >Things To Avoid In Periods</a>
            </button>
            <button className={style.btn}>
                <a href="/tips" >Things To Do In Periods</a>
            </button>
            </div>
        </div>
        <br></br><br></br>
    </div>
    )
}
