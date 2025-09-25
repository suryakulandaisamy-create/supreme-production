import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DataEntry from './pages/DataEntry'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <BrowserRouter>
      <div className="p-4 max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Supreme Production Toolkit</h1>
          <nav className="space-x-4">
            <Link to="/">Dashboard</Link>
            <Link to="/entry">Data Entry</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/entry" element={<DataEntry/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
