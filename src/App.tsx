import './App.css'
import { FC } from 'react'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'

export const App: FC = () => {

  return (
    <main className="app">
      <Register />
      <Login/>
    </main>
  )
}
