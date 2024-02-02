import React from "react"
import "./globals.css"
import Navbar from "./components/Navbar/page"
import Home from "./components/Home/page"
import About from "./components/About/page"
import Services from "./components/Services/page"
import Projects from "./components/Projects/page"
import Blogs from "./components/blogs/page"
import Partners from "./components/Partners/page"
import Contact from "./components/Contact/page"
import Footer from "./components/Footer/page"

export default function Main() {
  return (
    <>
    <div className="bg-dark">
    <Navbar/>
   
    <Home/>
 
    <About/>
    
  
    <Services/>
    <Projects/>
    <Blogs/>
    <Partners/>
    <Contact/>
    <div className="h-12">
      
    </div>
    <Footer/>
    </div>
   </>
  )
}
