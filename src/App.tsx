import './App.css'
import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'

export const App: FC = () => {

  return (
    <Router>
      <main className='app'>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  )
}
