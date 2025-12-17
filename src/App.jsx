import { Routes, Route } from 'react-router-dom'
import Terminal from './components/Terminal'
import ErrorBoundary from './components/ErrorBoundary'
import Classic from './pages/Classic'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/classic/*" element={<Classic />} />
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default App
