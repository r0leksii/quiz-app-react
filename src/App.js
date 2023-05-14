import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Quiz from './components/Quiz'

function App() {
  return (
    <Provider store={store}>
      <>
        <header>
          <h1>Quiz App</h1>
        </header>
        <main>
          <Quiz />
        </main>
      </>
    </Provider>
  )
}

export default App
