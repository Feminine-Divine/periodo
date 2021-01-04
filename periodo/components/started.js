import React from 'react'
import Link from 'next/link'
import styles from './started.module.css'

const Start=()=>{
    function getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return (`${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`)
        }

    return(
        <div>
            <h4 className={styles.heading}>Period just started: {getCurrentDate('-')}</h4>
            <Link href='/calender'>
            <a className={styles.heading}>Tap here</a>
            </Link>
        </div>
    )
}

export default Start