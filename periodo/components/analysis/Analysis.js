
import React from "react"
import { useState } from "react";
import ReactDOM from 'react-dom';
import styles from "./Analysis.module.css"
import Link from 'next/link'
import Header from './analysisToggle.js'
//import Router , {useRouter}  from 'next/router';
/*export default function Header(){
	const [showMe, setShowMe] = useState(false);
	function toggle(){
		setShowMe(!showMe);
	}
	return (
		<>
			<button onClick={toggle}>TELL ME MORE!</button>
			{/*The bottom code should toggle on and off when the button is pressed}*/
			/*<div style={{
				display: showMe?"block":"none"
			}}>
				Use heating pads
			</div>
		</>
	);
}*/



const Analysis=()=>{
	const questions = [
		{
			questionText: 'Are your periods regular?',
			answerOptions: [
				{ answerText: 'YES', is5Correct: true },
				{ answerText: 'NO', is5Correct: false },

			],

			imgsrc: './Questions.svg'
		},
		{
			questionText: 'Do you need medicines?',
			answerOptions: [
				{ answerText: 'YES', is5Correct: true },
				{ answerText: 'NO', is5Correct: false },

			],
			imgsrc: './Questions.svg'
		},
		{
			questionText: 'How many days does it last for?',
			answerOptions: [
				{ answerText: 'Less than 3', is5Correct: false },
				{ answerText: '3 to 5', is5Correct: false },
				{ answerText: 'More than 5', is5Correct: true },

			],
			imgsrc: './Questions.svg'
		},
		{
			questionText: 'Do you feel any pain?',
			answerOptions: [
				{ answerText: 'Extremely painful', is5Correct: true },
				{ answerText: 'Mild pain', is5Correct: false },
				{ answerText: 'No pain ', is5Correct: false},

			],
			imgsrc: './Questions.svg'
		},
		{
			questionText: 'Do you feel any mood swings?',
			answerOptions: [
				{ answerText: 'Almost all of the time', is5Correct: true },
				{ answerText: 'A little bit', is5Correct: false },
				{ answerText: 'No mood swings at all',  is5Correct: false},


			],
			imgsrc: './Questions.svg'
		},
	];
	const [showScore, setShowScore] = React.useState(false);
	const [isTrue, setIsTrue] = React.useState(false); //change
	const [score, setScore] = React.useState(0);

	const [currentQuestion, setCurrentQuestion] = React.useState(0);



	const handleAnswerOptionClick = (is5Correct) => {
	//isTrue === is5Correct;
		if (is5Correct) {

		 setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
		else {
			setShowScore(true);

		}
	}

//<div>{handleEndCard.h1}</div>
//You	scored {score} out of {questions.length}
	//	<img src="./Questions.svg" alt="Questions" width="100px" height="100px" ></img>



//function handleResultsClick(is5Correct) {
const handleResultsClick = (is5Correct) => {
	if (is5Correct) {
			setIsTrue(true);
	}
}
const element = <h1>Hello, world</h1>;
//const textres = <h1>Do this</h1>
		//	The variable is {isTrue}
		//	<button className={styles.endCardButton1} onClick={() => handleResultsClick(questions.is5Correct)}>TELL ME MORE !</button>
//You	scored {score} out of {questions.length}
	  return(

    <div className={styles.quiz}>

		{isTrue ? (
			<h1>{element}</h1>
		):

			showScore ? (
					<div className={styles.scoresection}>

					<img className={styles.allSet} alt="All Set!" src="/Checklist.svg" height="200px" width="200px" padding="10px"></img>
					<h1 className={styles.endCardHead}>ALL SET !</h1>
					<div className={styles.endCardText}>

					Your response is noted!<br/>
					Here are the curated remedies specially tailored to fit your needs....</div>

					<Link href='/analysis'>

					<button className={styles.endCardButton2}>RETAKE THE QUIZ</button>
					</Link>
					<Header  className={styles.endCardButton1} />
					</div>

					) : (

				<>
					<div className={styles.questionsection}>
						<div className={styles.questioncount}>
							<span>Question {currentQuestion + 1}</span><span>/</span>{questions.length}
						</div>
						<div className={styles.questiontext}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answersection}>
						{questions[currentQuestion].answerOptions.map((answerOption, key) => (
							<div key={key}>

								<button className={styles.button } onClick={() => handleAnswerOptionClick(answerOption.is5Correct)}>{answerOption.answerText}</button>
							</div>
						))}
					</div>
				</>
			)}

		</div>

    );
}
export default Analysis;
