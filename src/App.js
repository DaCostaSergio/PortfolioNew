
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="fixed bg-white w-full z-50">
          <div >
            <div className="lg:flex lg:justify-between font-N27 text-[28px] mx-2  lg:text-7xl">
              <div >
                <NavLink to="/" style={({ isActive }) => ({
                  color: isActive ? 'red' : 'black'
                })}>
                  S_DC
                </NavLink>
              </div>
              <div className="flex  justify-between lg:space-x-10 z-40">
                <div >
                  <NavLink to="/projects" style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                  })}>
                    WORK
                  </NavLink>
                </div>
                <div >
                  <NavLink to="/about" style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                  })}>
                    ABOUT
                  </NavLink>
                </div>
                <div >
                  
                   <a href="mailto:dacosta.sergio@yahoo.com"> CONTACT</a>
               
                </div>

              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;