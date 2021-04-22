import React from "react";
import styles from "./Analysis.module.css";

const Analysis = () => {
  const questions = [
    {
      questionText: "Are your periods regular?",
      answerOptions: [
        { answerText: "YES", isCorrect: true },
        { answerText: "NO", isCorrect: true },
      ],
    },
    {
      questionText: "Do you need medicines?",
      answerOptions: [
        { answerText: "YES", isCorrect: true },
        { answerText: "NO", isCorrect: true },
      ],
    },
    {
      questionText: "How many days does it last for?",
      answerOptions: [
        { answerText: "Less than 3", isCorrect: true },
        { answerText: "3 to 5", isCorrect: true },
        { answerText: "More than 5", isCorrect: true },
      ],
    },
    {
      questionText: "do you feel any pain?",
      answerOptions: [
        { answerText: "Extremely painful", isCorrect: true },
        { answerText: "Mild pain", isCorrect: true },
        { answerText: "No pain ", isCorrect: true },
      ],
    },
    {
      questionText: "Do you feel any mood swings?",
      answerOptions: [
        { answerText: "Almost of the time", isCorrect: true },
        { answerText: "little-bit", isCorrect: true },
        { answerText: "No mood swings at all", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };
  return (
    <div className={styles.quiz}>
      {
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
      }
    </div>
  );
};
export default Analysis;
