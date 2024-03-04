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
                <h3>IEEE_event_name</h3>
                <p>I'm sorry for any confusion, but as of my last knowledge update in January 2022, I don't have real-time information or specific details about current IEEE events. IEEE (Institute of Electrical and Electronics Engineers) organizes numerous conferences, workshops, and events globally on various topics related to technology and engineering.

                To find the most recent and specific details about IEEE events, I recommend visiting the official IEEE website (https://www.ieee.org/) or checking the IEEE conference search page (https://conferences.ieee.org/) for the latest information on upcoming events, including dates, locations, and themes.

                If you have a particular IEEE event in mind, please specify the event's name or type, and I can provide general information or guidance based on my last update.</p>

                <span>Event_FOMO</span>
                <div className="butn-grp">
                <button className="btn btn-primary butn">See Details</button>
                <button className="btn btn-primary butn">Link(form)</button>
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