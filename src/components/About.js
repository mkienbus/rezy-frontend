import React from 'react';
import Nav from './tools/Nav';
function About(){

    //links to external sites are injecting localhost proxy

    return(
        <div>
            <Nav />
            <h2>Rezy</h2>
            <p>An application for making reservations at restaurants!</p>
            <p>Created by Michael Kienbusch</p>
            <p>Github <a href="https://github.com/mkienbus">here</a></p>
            <p>Dev.to <a href="https://dev.to/mkienbus">here</a></p>
        </div>
    )
}

export default About;