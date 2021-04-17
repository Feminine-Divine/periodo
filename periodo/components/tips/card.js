import React from "react";
import style from "./cards.module.css";
import Image from 'next/image'
const card=({props})=>{
        const propsList=props.map((prop)=>{
            return (
            <div className={style.card}>
                <div className={style.circle}>
                <div className={style.img}>
                            <Image src="/bg.png" layout="fill" />
                        </div>
                    <div className={style.h2}>
                    
                        <h2 >{prop.tipNumber}</h2>
                       
                    </div>
                </div>

                <div className={style.content}>
                    
                    <p className={style.p}>{prop.tipContent} </p>
                    <a href={prop.link}  className={style.a}>Read more </a>
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
