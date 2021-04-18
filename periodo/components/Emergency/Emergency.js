import React, { useState } from 'react';
import styles from "./emergency.module.css";


const App = (props) => {
    return (
      <>
      <div className = "emergency"> 
        <a href="https://www.google.com/maps/search/restrooms+near+me" target="_blank">
         <button className={styles.btn} >Emergency</button>
        </a> 
      </div>      
      </>
    )
}

export default App;