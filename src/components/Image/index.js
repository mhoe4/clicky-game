import React from "react";
import "./style.css";

function Image(props) {
    return (
        <div role="img" aria-label="click item" class="click-item" onClick={() => props.clickImage(props.id)} >
            <img alt={props.name} src={props.image} />
        </div>
    );
}

export default Image;
