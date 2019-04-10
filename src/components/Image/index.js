import React from "react";
import "./style.css";

function Image(props) {
    return (
        // <div role="img" aria-label="click item" class="click-item" style="background-image: url(&quot;/assets/images/rick.png&quot;);"></div>
        <div className="card">
            <div className="img-container" onClick={() => props.clickImage(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
  );
}

export default Image;
