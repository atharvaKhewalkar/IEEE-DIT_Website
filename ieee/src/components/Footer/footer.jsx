import React from "react";
import './footer.css'
import Lottie from "lottie-react";
import ani7 from '../animations/ani7.json'
import insta from '../animations/insta.json'
import link from '../animations/linkedin.json'

function Footer(){
    return(
        <section className="footer">
        <div className="links">
            <div className="insta">
            <a href="https://www.instagram.com/ieee_dit?igsh=cGUzaDVkaDZpNXdz">
                <Lottie animationData={insta}></Lottie>
            </a>
            </div>
           <div className="linke">
           <a href="https://www.linkedin.com/company/ieee-dypit/">
                <Lottie animationData={link}/>
            </a>
           </div>
            
        </div>
            <div>
                <Lottie className="ani7" animationData={ani7}/>
            </div>
        </section>
    )
}

export default Footer;