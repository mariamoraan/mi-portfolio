import React, {useEffect, useState} from 'react'
import "./global.css"
import Projects from './containers/Projects'
import Menu from './components/Menu';
import Cover from './components/Cover';


const App = () =>{
    return(
        <div className="app">
            <Menu />
            <Cover />
            <div className="content">
                <Projects />
            </div>         
        </div>
    )
}

export default App;