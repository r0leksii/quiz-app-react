//simple quize app with react and react hooks and react context api
import './App.css'
import { Quiz } from './components/Quiz'
import { QuizeProvider } from './context/QuizContext'

function App() {
  return (
    <QuizeProvider>
      <>
        <header className="App-header">
          <h1>Quize App</h1>
        </header>
        <main>
          <Quiz />
        </main>
      </>
    </QuizeProvider>
  )
}

export default App
