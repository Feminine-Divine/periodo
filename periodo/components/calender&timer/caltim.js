import React from 'react';
import style from './calender.module.css';

export default function caltim() {
    return (
    <div className={style.intro}>
        <h1>| COUNT , CALCULATE AND CHECK YOUR PERIODS |</h1>
        <div className={style.container2} style={{marginLeft:"200px"}}>
            <div className={style.card2}>
            <button className={style.btn}>
                <a href="/timer" >Timer</a>
            </button>
            <button className={style.btn}>
                <a href="/calender" >calender</a>
            </button>
            </div>
        </div>
        <br></br><br></br>
    </div>
    )
}
