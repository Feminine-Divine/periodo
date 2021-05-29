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
 /*   const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMintues] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startsTimer = () => {
        const countdownDate = new Date('May 28, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = (distance / (1000*60*60*24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 *60 * 60))/ (1000 * 60));
            const seconds = Math.floor((distance % (1000 *60)) / (1000));

            if(distance < 0){
                clearInterval(interval.current)
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMintues(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startsTimer();
        return () =>{
            clearInterval(interval.current)
        }
    })
    */
    return (
        <div style={{marginTop:"50px"}}>
        <section className={style.timer_container}>
            <section className={style.timer}>
                <div>
                    <span >
                        <h2 className={style.h2}>Countdown  Timer</h2>
                    </span> 
                </div>
                <div >
                    
                        <p className={style.section}>{ctime}</p>
                        
                    
                </div>
                
            </section>
        </section>
        </div>
    )
}
