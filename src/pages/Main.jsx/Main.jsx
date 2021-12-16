import React from 'react';
import Menu from '../../components/Menu';
import Cover from '../../components/Cover';
import Projects from '../../containers/Projects';
const Main = () => {
    return(
        <div className="app">
            <Cover />
            <div className="content">
                <Projects />
            </div>         
        </div>
    )
}

export default Main;