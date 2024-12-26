import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeTemplate from './components/HomeTemplate'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import TestPage from './components/TestPage'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeTemplate/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/testPage' element={<TestPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
