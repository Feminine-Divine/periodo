import React from 'react'
import Link from 'next/link'
import styles from './started.module.css'

const Start=()=>{
    return(
        <div>
            <h4 className={styles.heading}>Period just started:</h4>
            <Link href='/calender'>
            <a className={styles.heading}>Tap here</a>
            </Link>
        </div>
    )
}

export default Start