import { useState, useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

export const Quiz = () => {
  const { quizData, correctAnswers } = useContext(QuizContext)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState(
    new Array(quizData.length).fill(null)
  )
  const [score, setScore] = useState(null)

  const handleAnswerSelect = (answerIndex) => {
    const updatedUserAnswers = [...userAnswers]
    updatedUserAnswers[currentQuestionIndex] = answerIndex
    setUserAnswers(updatedUserAnswers)
  }

  const handleSubmit = () => {
    let newScore = 0
    userAnswers.forEach((answerIndex, questionIndex) => {
      const isCorrect = quizData[questionIndex].answers[answerIndex].isCorrect
      if (isCorrect) {
        newScore++
      }
    })
    setScore(newScore)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      handleSubmit()
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers(new Array(quizData.length).fill(null))
    setScore(null)
  }

  return (
    <>
      {score === null ? (
        <>
          <h3>
            {quizData[currentQuestionIndex].id}.{' '}
            {quizData[currentQuestionIndex].question}
          </h3>
          <ul>
            {quizData[currentQuestionIndex].answers.map(
              (answer, answerIndex) => (
                <li key={answerIndex}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      checked={
                        userAnswers[currentQuestionIndex] === answerIndex
                      }
                      onChange={() => handleAnswerSelect(answerIndex)}
                    />
                    {answer.text}
                  </label>
                </li>
              )
            )}
          </ul>
          {
            <button
              onClick={handleNextQuestion}
              disabled={userAnswers[currentQuestionIndex] === null}
            >
              Next Question
            </button>
          }
        </>
      ) : (
        <>
          <div className="result">
            <h4>Your score: </h4>
            <div className="result-score">{score}</div>
          </div>
          <div>{correctAnswers}</div>
          <button onClick={handleRestart}>Restart Quiz</button>
        </>
      )}
    </>
  )
}
