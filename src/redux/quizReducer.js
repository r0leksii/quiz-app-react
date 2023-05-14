import { quizData } from '../data/quizData'
import {
  NEXT_QUESTION,
  SELECT_ANSWER,
  SUBMIT_QUIZ,
  RESTART_QUIZ,
} from './actions'

const initialState = {
  quizData,
  currentQuestionIndex: 0,
  userAnswers: new Array(quizData.length).fill(null),
  score: null,
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ANSWER:
      const updatedUserAnswers = [...state.userAnswers]
      updatedUserAnswers[state.currentQuestionIndex] =
        action.payload.answerIndex
      return {
        ...state,
        userAnswers: updatedUserAnswers,
      }
    case NEXT_QUESTION:
      if (state.currentQuestionIndex < state.quizData.length - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
        }
      } else {
        return state
      }
    case SUBMIT_QUIZ:
      let newScore = 0
      state.userAnswers.forEach((answerIndex, questionIndex) => {
        const isCorrect =
          state.quizData[questionIndex].answers[answerIndex].isCorrect
        if (isCorrect) {
          newScore++
        }
      })
      return {
        ...state,
        score: newScore,
      }
    case RESTART_QUIZ:
      return {
        ...state,
        currentQuestionIndex: 0,
        userAnswers: new Array(state.quizData.length).fill(null),
        score: null,
      }
    default:
      return state
  }
}

export default quizReducer
