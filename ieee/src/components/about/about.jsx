import React from "react";
import './about.css'
import AbtCrd from "../abt-card/abt-card";
import Lottie from "lottie-react";
import ani3 from '../animations/ani3.json'

function About(){
    return(
        <section className="about">
            <div>
                <div className="heading">
                    <h1>About Us</h1>
                </div>
                <div className="abt-ani">
                <Lottie className="ani3" animationData={ani3}/>
                </div>
                
                <div className="abt-cnt">
                    <AbtCrd
                        Title={"Our Mission"}
                        Description={'We try our best to adther to the slogan of IEEE itself i.e."Advancing Technology for Humanity". So at our Student Branch we strive to encourage and engage activities in all domains of engineering itself. We want to grow as a leading student branch which uplift Technical Ingenuity and innovation.'}
                    />

                    <AbtCrd
                        Title={"Who We Are"}
                        Description={"[Your Organization Name] is a [Local/Regional/National/International] chapter of IEEE, bringing together professionals, researchers, students, and enthusiasts passionate about cutting-edge technologies. As a [Local/Regional/National/International] hub, we strive to create a vibrant community that encourages learning, networking, and the exchange of ideas."}
                    />

                    <AbtCrd
                        Title={"Our History"}
                        Description={"Founded in 1884, IEEE has a rich history of shaping the future of technology. [Your Organization Name] was established in [Year], and since then, we have been actively contributing to the IEEE community by organizing events, conferences, and initiatives that promote knowledge sharing and professional development."}
                    />
                </div>
            </div>
        </section>
    )
}

export default About; 