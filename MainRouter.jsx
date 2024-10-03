import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './src/About'
import Contact from './src/contact'
import Services from './src/Services'
import Project from './src/Project'
import Layout from './Components/Layout'

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/About" element={<About />} />
                        <Route exact path="/Services" element={<Services />} />
                        <Route exact path="/Project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        
                </Routes>
        </div>
        )
}
export default MainRouter

