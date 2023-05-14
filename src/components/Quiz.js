import { useSelector, useDispatch } from 'react-redux'
import {
  selectAnswer,
  nextQuestion,
  submitQuiz,
  restartQuiz,
} from '../redux/actions'

export const Quiz = () => {
  const dispatch = useDispatch()
  const quizData = useSelector((state) => state.quizData)
  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex
  )
  const userAnswers = useSelector((state) => state.userAnswers)
  const score = useSelector((state) => state.score)

  const handleAnswerSelect = (answerIndex) => {
    dispatch(selectAnswer(answerIndex))
  }

  const handleSubmitQuiz = () => {
    dispatch(submitQuiz())
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      dispatch(nextQuestion())
    } else {
      handleSubmitQuiz()
    }
  }

  const handleRestart = () => {
    dispatch(restartQuiz())
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
          <button
            onClick={handleNextQuestion}
            disabled={userAnswers[currentQuestionIndex] === null}
          >
            Next Question
          </button>
        </>
      ) : (
        <>
          <div className="result">
            <h4>Your score: </h4>
            <div className="result-score">{score}</div>
          </div>
          <div>
            {quizData.map((question) => (
              <p key={question.id}>
                {question.id}. {question.question}{' '}
                <span className="text-correct-answer">
                  Correct answer is{' '}
                  {question.answers.find((answer) => answer.isCorrect).text}
                </span>
              </p>
            ))}
          </div>
          <button onClick={handleRestart}>Restart Quiz</button>
        </>
      )}
    </>
  )
}

export default Quiz
