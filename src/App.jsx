import Navbar from "./Navbar"
import Contacts from "./Components/Contacts"
import Home from "./Components/Home"
import About from "./Components/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App