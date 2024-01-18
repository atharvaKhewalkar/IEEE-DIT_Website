import React from "react";
import './abt-card.css'

function AbtCrd({Title,Description}){
    return(
        <div className="abt-crd">
            <h2>{Title}</h2>
            <p>{Description}</p>
        </div>
    )
}

export default AbtCrd;