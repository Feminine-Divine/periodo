
import React from "react"
import styles from "./Analysis.module.css"
import Link from 'next/link'
//import Router , {useRouter}  from 'next/router';





const Analysis=()=>{
	const questions = [
		{
			questionText: 'Are your periods regular?',
			answerOptions: [
				{ answerText: 'YES', is5Correct: true },
				{ answerText: 'NO', is5Correct: false },


			],
		},
		{
			questionText: 'Do you need medicines?',
			answerOptions: [
				{ answerText: 'YES', is5Correct: true },
				{ answerText: 'NO', is5Correct: false },

			],
		},
		{
			questionText: 'How many days does it last for?',
			answerOptions: [
				{ answerText: 'Less than 3', is5Correct: false },
				{ answerText: '3 to 5', is5Correct: false },
				{ answerText: 'More than 5', is5Correct: true },

			],
		},
		{
			questionText: 'Do you feel any pain?',
			answerOptions: [
				{ answerText: 'Extremely painful', is5Correct: true },
				{ answerText: 'Mild pain', is5Correct: false },
				{ answerText: 'No pain ', is5Correct: false},

			],
		},
		{
			questionText: 'Do you feel any mood swings?',
			answerOptions: [
				{ answerText: 'Almost all of the time', is5Correct: true },
				{ answerText: 'A little bit', is5Correct: false },
				{ answerText: 'No mood swings at all',  is5Correct: false},


			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [showScore, setShowScore] = React.useState(false);
	const [score, setScore] = React.useState(0);

	const handleAnswerOptionClick = (is5Correct,answerOptions) => {

		if (is5Correct) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
		else {
			setShowScore(true);

//const router = useRouter();
				//<button type="button" onClick={() => router.push('/myroute')} />
		//	<button className={styles.button}  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>SUBMIT</button>
		//	<form ref="form">
	    // <button type="submit">Do the thing</button>
	   // </form>
		} //
	}

//<div>{handleEndCard.h1}</div>
//You	scored {score} out of {questions.length}
//
    return(

    <div className={styles.quiz}>
			{showScore ? (
					<div className={styles.scoresection}>
					<img className={styles.allSet} alt="All Set!" src="/Checklist.svg" height="200px" width="200px" padding="10px"></img>
					<h1 className={styles.endCardHead}>ALL SET...</h1>
					<h5 className={styles.endCardText}>
					Your response is noted!<br/>
					Here are the curated remedies specially tailored to fit your needs....</h5>
					<button className={styles.endCardButton1}>TELL ME MORE !</button>
					<Link href='/analysis'>
					<button className={styles.endCardButton2}>RETAKE THE QUIZ</button>
					</Link>
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
