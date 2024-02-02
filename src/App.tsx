import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './assets/css/App.css'
import Home from "./pages/home"
import Login from "./pages/auth/Login"
import { Navbar } from "./pages/layout/navbar"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rated" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
