import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/logins/Login'
import UserSignup from './components/signups/UserSignup'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Login/>} />
          <Route path='/signup' element = {<UserSignup/>} />
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
