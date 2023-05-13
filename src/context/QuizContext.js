import { createContext } from 'react'
import { quizData } from '../data/quizData'

export const QuizContext = createContext()

export const QuizeProvider = ({ children }) => {
  const textCorrectAnswers = 'Correct answer is '

  const correctAnswers = quizData.map((question) => {
    return (
      <p key={question.id}>
        {question.id}. {question.question}{' '}
        <span className="text-correct-answer">
          {textCorrectAnswers}
          {question.answers.find((answer) => answer.isCorrect).text}
        </span>
      </p>
    )
  })

  return (
    <QuizContext.Provider value={{ quizData, correctAnswers }}>
      {children}
    </QuizContext.Provider>
  )
}
