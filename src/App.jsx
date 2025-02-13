import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import Achievements from './components/Achievements'
import Qualifications from './components/Qualifications'
import './App.css'

function App() {
  return (
    <Router>
      <div id="root">
        <header className="App-header">
          <h1>Cities</h1>
        </header>

        <div className="main-content">
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/achievements">Achievements</Link>
              </li>
              <li>
                <Link to="/qualifications">Qualifications</Link>
              </li>
            </ul>
          </nav>

          <article className="App-article">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/qualifications" element={<Qualifications />} />
            </Routes>
          </article>
        </div>

        <footer className="App-footer">
          <p>&copy; SiliconUniversity 2021</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
