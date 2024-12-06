import React from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App