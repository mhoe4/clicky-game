import React from "react";

function Nav(props) {
    return (
        // <div role="img" aria-label="click item" class="click-item" onClick={() => props.clickImage(props.id)} >
        //     <img alt={props.name} src={props.image} />
        // </div>
        <nav class="navbar">
            <ul>
                <li class="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li class="banner">Click an image to begin!</li>
                <li class="score">Score: {props.state.score} | Top Score: {props.state.topScore}</li>
            </ul>
        </nav>

    );

}

export default Nav;
