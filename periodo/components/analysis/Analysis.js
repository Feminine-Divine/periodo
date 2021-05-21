import React from "react";
import { useState } from "react";
import styles from "./Analysis.module.css";

const Analysis = () => {
  const questions = [
    {
      questionText: "Are your periods regular?",
      answerOptions: [
        { answerText: "YES", isCorrect: false },
        { answerText: "NO", isCorrect: true },
      ],
    },
    {
      questionText: "Do you need medicines?",
      answerOptions: [
        { answerText: "YES", isCorrect: true },
        { answerText: "NO", isCorrect: false },
      ],
    },
    {
      questionText: "How many days does it last for?",
      answerOptions: [
        { answerText: "Less than 3", isCorrect: false },
        { answerText: "3 to 5", isCorrect: false },
        { answerText: "More than 5", isCorrect: true },
      ],
    },
    {
      questionText: "Do you feel any pain?",
      answerOptions: [
        { answerText: "Extremely painful", isCorrect: true },
        { answerText: "Mild pain", isCorrect: false },
        { answerText: "No pain ", isCorrect: false },
      ],
    },
    {
      questionText: "Do you feel any mood swings?",
      answerOptions: [
        { answerText: "Almost all of the time", isCorrect: true },
        { answerText: "A little bit", isCorrect: false },
        { answerText: "No mood swings at all", isCorrect: false },
      ],
    },
  ];

  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  var yes = 0;
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      yes = 1;
    }
    setScore(score * 10 + yes); /* calculates score */
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function Header() {
    const [showMe1, setShowMe1] = useState(false);
    const [showMe2, setShowMe2] = useState(false);
    const [showMe3, setShowMe3] = useState(false);
    const [showMe4, setShowMe4] = useState(false);
    const [showMe5, setShowMe5] = useState(false);

    /* Taking each digit of result to map each question to specific answer */
    const a1 = score % 10;
    const a2 = ((score / 10) | 0) % 10;
    const a3 = ((score / 100) | 0) % 10;
    const a4 = ((score / 1000) | 0) % 10;
    const a5 = ((score / 10000) | 0) % 10;

    /* Toggles first card if answer for question 1 is true  */    
    function toggle() {
      if (a1 == 1) {
        setShowMe1(
          !showMe1
        ); 
      }
      /* Toggles second card if answer for question 2 or 4 is true  */
      if (a2 == 1 || a4 == 1) {
        setShowMe2(
          !showMe2
        ); 
      }
      /* Toggles third card if answer for question 3 is true  */
      if (a3 == 1) {
        setShowMe3(
          !showMe3
        );
      }
      /* Toggles fourth card if answer for question 4 is true  */
      if (a5 == 1) {
        setShowMe4(
          !showMe4
        ); 
      }
       /* Toggles last card if no answer is true  */
      if (a1 == 0 && a2 == 0 && a3 == 0 && a4 == 0 && a5 == 0) {
        setShowMe5(!showMe5);
      }
    }
    return (
      <>
        <button className={styles.endCardButton1} onClick={toggle}>
          TELL ME MORE!
        </button>

        {/*The bottom code should toggle on and off when the button is pressed*/}
        <div className="resCards">
          <div style={{ display: showMe1 ? "block" : "none" }}>
            <div className={styles.resultCard}>
              Maintaining a healthy lifestyle can help reduce the risk of some
              of the causes of irregular periods.
              <br />
              This includes:
              <ul>
                <li>
                  exercising regularly to maintain a healthy weight and reduce
                  stress
                </li>
                <li>following a healthy diet</li>
              </ul>
            </div>
          </div>
          <div style={{ display: showMe2 ? "block" : "none" }}>
            <div className={styles.resultCard2}>
              Ouch! Try applying heating pads to quell the pain.Over-the-counter
              pain relievers, such as ibuprofen (Advil, Motrin IB, others) or
              naproxen sodium (Aleve), at regular doses starting the day before
              you expect your period to begin can help control the pain of
              cramps.
            </div>
          </div>
          <div style={{ display: showMe3 ? "block" : "none" }}>
            <div className={styles.resultCard3}>
              Don’t ignore a long period. It’s important to see your doctor to
              discuss why you might be experiencing this symptom. Delaying your
              diagnosis and treatment could lead to a worsening of the
              underlying condition responsible for the extended bleeding.
            </div>
          </div>
          <div style={{ display: showMe4 ? "block" : "none" }}>
            <div className={styles.resultCard4}>
              It is important to speak to a doctor before taking supplements to
              treat PMS or any other condition.
              <ul>
                <li>
                  Not getting enough sleep can kill your mood if you're weeks
                  away from your period.
                </li>
                <li>Unmanaged stress can worsen mood swings.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: showMe5 ? "block" : "none" }}>
            <div className={styles.resultCard5}>
              <img className={styles.congrats} src="/Congrats.svg" />
              <p className={styles.resultCard5Text}>
                <strong>
                  {" "}
                  #Blessed!
                  <br />
                </strong>{" "}
                Don't stress - looks like you have already discerned what works
                best for you! Continue living your awesome lifestyle and lording
                over the rest of us, you lucky human!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  /* function for retaking quiz */
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={styles.quizWrapper}>
      <h1 className={styles.quizHead}>
        {" "}

        {" "}

        Get the answers to all your questions. Period.{" "}

      </h1>
      <div className={styles.quiz}>
        {showScore ? (
          <div className={styles.scoresection}>
            <img
              className={styles.allSet}
              alt="All Set!"
              src="/Checklist.svg"
              height="200px"
              width="200px"
              padding="10px"
            ></img>
            <h1 className={styles.endCardHead}>ALL SET !</h1>
            <div className={styles.endCardText}>
              Your response is noted!
              <br />
              Here are the curated remedies specially tailored to fit your
              needs....
            </div>
            <Header className={styles.endCardButton1} />
            <button onClick={refreshPage} className={styles.endCardButton2}>
              <p className={styles.retake}>RETAKE THE QUIZ </p>
            </button>
          </div>
        ) : (
          <>
            <div className={styles.questionsection}>
              <div className={styles.questioncount}>
                <span>Question {currentQuestion + 1}</span>
                <span>/</span>
                {questions.length}
              </div>
              <div className={styles.questiontext}>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className={styles.answersection}>
              {questions[currentQuestion].answerOptions.map(
                (answerOption, key) => (
                  <div key={key}>
                    <button
                      className={styles.button}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  </div>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Analysis;

