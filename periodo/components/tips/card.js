import React from "react";
import style from "./cards.module.css";
const card=({props})=>{
        const propsList=props.map((prop)=>{
            return (
            <div className={style.card}>
                <div className={style.circle}>
                    <div className={style.h2}>
                        <h1 >{prop.tipNumber}</h1>
                    </div>
                </div>
                <div className={style.content}>
                    <p className={style.p}>{prop.tipContent} </p>
                    <a href="#"  className={style.a}>Read more</a>
                </div>
            </div>
        );
    })
    return (
        <div className={style.section}>
            <div className={style.body}>
                <div className={style.container}>
                    {propsList}
                </div>
            </div>
        </div>
    );
}
export default card;
