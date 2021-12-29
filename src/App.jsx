import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./global.css"
import Menu from './components/Menu';
import Footer from './components/Footer';
import Main from './pages/Main.jsx/Main';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectInfo from './components/ProjectInfo';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './utils/ScrollToTop';

const App = () =>{
    return(
        <BrowserRouter>
            <Menu />
            <ScrollToTop />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/project-info/:id' element={<ProjectInfo/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route  path='*' element={<Main/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;