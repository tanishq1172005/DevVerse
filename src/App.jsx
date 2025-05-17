import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"



function App(){
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route/>
    </Routes>
  </Router>
  )
}

export default App