import React from "react";
import './footer.css'
import Lottie from "lottie-react";
import ani7 from '../animations/ani7.json'

function Footer(){
    return(
        <section className="footer">
            <div>
                <Lottie className="ani7" animationData={ani7}/>
            </div>
        </section>
    )
}

export default Footer;