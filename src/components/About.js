import React from 'react';
import Nav from './tools/Nav';
function About(){

    return(
        <div>
            <Nav />
            <h2>Rezy</h2>
            <p>An application for making reservations at restaurants!</p>
            <p>Created by Michael Kienbusch</p>
            <p>Github <a href="https://github.com/mkienbus" target="_blank" rel="noopener noreferrer">here</a></p>
            <p>Personal Portfolio <a href="https://mkienbus.github.io/" target = "_blank" rel="noopener noreferrer">here</a></p>
            <p>Dev.to <a href="https://dev.to/mkienbus" target="_blank" rel="noopener noreferrer">here</a></p>
        </div>
    )
}

export default About;