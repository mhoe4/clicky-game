import React from "react";
import "./style.css";

function Image(props) {
    return (
        <div role="img" aria-label="click item" className="click-item" onClick={() => props.clickImage(props.id)} >
            <img alt={props.name} src={props.image} />
        </div>
    );
}

export default Image;
