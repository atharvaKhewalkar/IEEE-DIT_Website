import React from "react";
import './tem-crd.css'

function TemCrd({Img,Name,Position}){
    return(
        <div className="tem-crd">
            <img src={Img}></img>
            <h4>{Name}</h4>
            <p>{Position}</p>
        </div>
    )
}

export default TemCrd;