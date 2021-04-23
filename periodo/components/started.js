import React from 'react'
import Link from 'next/link'
import styles from './started.module.css'

const Start = () => {
    function getCurrentDate(separator = '') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return (`${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`)
    }

    function getnextDate(separator = '') {

        let newDate = new Date()
        let date = newDate.getDate() + 28;
        let month = newDate.getMonth() + 1;
        if (date > 30) {
            month = (newDate.getMonth() % 12) + 2;
        }
        let year = newDate.getFullYear();
        if (month > 12) {
            year = newDate.getFullYear() + 1;
        }

        return (`${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date % 30}`)
    }

    return (
        <>
            <div>
                <div className={styles.slider}></div>
                    
                <div className={styles.item1}>Women complain about premenstrual syndrome, but I think of it as the only time of the month that I can be myself- Roseanne Barr</div>
                <div className={styles.item2}>Periodo is here to help you</div>
                <div className={styles.item3}>We Care About Your Periods</div>
                
                <h1 className={styles.title}>Hii Girls, wanna track your periods!!</h1>
                <h4 className={styles.heading}>Period Cycle: 28 days</h4>
                <h4 className={styles.heading}>Next Period Date: {getnextDate('-')}</h4>
                <h4 className={styles.heading}>Period just started: {getCurrentDate('-')}</h4>
                
                <Link href='/calender'>
                    {/* <div className={styles.btn_container}> */}
                        <button className={styles.button}>Tap here</button>
                    {/* </div> */}
                </Link>
            </div>
            
        </>
    )
}

export default Start