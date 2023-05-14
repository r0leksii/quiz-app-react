export const SELECT_ANSWER = 'SELECT_ANSWER'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const SUBMIT_QUIZ = 'SUBMIT_QUIZ'
export const RESTART_QUIZ = 'RESTART_QUIZ'

export const selectAnswer = (answerIndex) => ({
  type: SELECT_ANSWER,
  payload: {
    answerIndex,
  },
})

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
})

export const submitQuiz = () => ({
  type: SUBMIT_QUIZ,
})

export const restartQuiz = () => ({
  type: RESTART_QUIZ,
})
