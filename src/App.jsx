import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' />
          <Route path='/signup' />
          <Route path='/admin-login' />
          <Route path='/admin-signup' />
          <Route path='/home' />
          <Route path='/main-home' />
        </Routes>
      </Router>
    </>
  )
}

export default App
