import React from "react";

function Nav(props) {
    return (
        <nav className="navbar">
            <div className="brand text-left">
                <a href="/">Clicky Game</a>
            </div>
            <div className="banner text-center">Click an image to begin!</div>
            <div className="score text-right">Score: {props.score} | Top Score: {props.topScore}</div>
        </nav>
    );

}

export default Nav;
