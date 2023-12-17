import './App.css'
import { FC } from 'react'
import { Register } from './components/Register/Register'

export const App: FC = () => {
  return (
    <main className="app">
      <Register />
    </main>
  )
}
