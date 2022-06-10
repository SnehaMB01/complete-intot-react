import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
export default function RouterPage() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/login' exact element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
          </Routes>
      </Router>
    </div>
  )
}
