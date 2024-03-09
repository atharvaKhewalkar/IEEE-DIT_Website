import React from "react";
import './events.css'
import ani4 from '../animations/ani4.json'
import Lottie from "lottie-react";

function Event(){
    return(
        <section className="event">
        <div className="container">

        
            <div className="heading">
                <h1>Upcoming Events</h1>
            </div>
            <div className="eve-cnt">
                <h3>IEEE YESIST12</h3>
                <p>Join us at IEEE YESIST12, where innovation meets sustainability! On March 11th, 2024, Dr. D. Y. Patil Institute of Technology, Pimpri, will host the preliminary round. 

                Excitingly, 20+ countries are participating in YESIST12 2024, and the grand finale will be held in Tunisia. 

                This project competition offers two tracks: 
                The INNOVATION CHALLENGE TRACK, focusing on holistic solutions aligned with the UN's Sustainable Development Goals, and 
                The SPECIAL TRACK, centered on Smart Infrastructure and Safe Living. 

                
                

                Let's innovate, collaborate, and shape a brighter tomorrow together! 

                Save the date: March 11th, 2024
                Venue: Dr. D. Y. Patil Institute of Technology, Pimpri</p>

                <span>Don't miss this out</span>
                <div className="butn-grp">
                <a href="https://chat.whatsapp.com/GIMKvagSiEBFpPQXv3UtAx">
                    <button className="btn btn-primary butn">See Details</button>
                </a>
                
                <a href="https://portal.ieeeyesist12.org/dypit">
                <button className="btn btn-primary butn">Link(form)</button>
                </a>
                
                </div>
                {/* <div>
                    <Lottie className="ani4" animationData={ani4}/>
                </div> */}
            </div>
            </div>
        </section>
    )
}

export default Event;