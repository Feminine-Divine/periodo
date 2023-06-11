import React, {useState, useEffect} from 'react';
import { useRef } from 'react';
import style from './calender.module.css';


export default function timer() {

    let time = new Date().toLocaleTimeString();

    const [ctime , setCtime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }

    setInterval(updateTime,1000)
 
    return (
        <body>
        <div >
        <section className={style.timer_container}>
            <section className={style.timer}>
                <div>
                    <span >
                        <h2 className={style.h2}>Calander and Countdown  Timer</h2>
                    </span> 
                </div>
                <div >
                    
                        <p className={style.section}>{ctime}</p>
                        
                    
                </div>
                
            </section>
        </section>
        </div>
        </body>
    )
}
