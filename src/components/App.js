import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Results from "./Result";
import Admission from "./Admission";


function App () {
return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="admission" element={<Admission />} />
      <Route path="result" element={<Results />} />

    </Route>
  </Routes>
</BrowserRouter>
)
}

export default App;