import React from "react";
import { useState } from 'react'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import PlansPage from './pages/PlansPage'

function App() {
  const [page, setPage] = useState('login')

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutPage />
      case 'plans':
        return <PlansPage />
      default:
        return <LoginPage />
    }
  }

  return (
    <>
      <Header onNavigate={setPage} />
      {renderPage()}
    </>
  )
}

export default App 