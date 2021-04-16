import React from "react"
import { useState } from "react";
import styles from "./Analysis.module.css"

export default function Header(){
	const [showMe, setShowMe] = useState(false);
	function toggle(){
		setShowMe(!showMe);
	}
	return (
		<>
			<button className={styles.endCardButton1} onClick={toggle}>TELL ME MORE!</button>
			{/*The bottom code should toggle on and off when the button is pressed*/}
			<div style={{
				display: showMe?"block":"none"
			}}>
				<div className={styles.resultCard}>
        Ouch! Try applying heating pads to quell the pain.Over-the-counter pain relievers, such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve), at regular doses starting the day before you expect your period to begin can help control the pain of cramps

        </div>
        <div className={styles.resultCard2}>

        Maintaining a healthy lifestyle can help reduce the risk of some of the causes of irregular periods.<br/>
        This includes:
        <ul>
        <li>exercising regularly to maintain a healthy weight and reduce stress</li>
        <li>following a healthy diet</li>
        </ul>
        </div>
			</div>
		</>
	);
}
