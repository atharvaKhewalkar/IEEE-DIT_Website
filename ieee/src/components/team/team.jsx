import React from "react";
import './team.css'
import TemCrd from "../tem-crd/tem-crd";
import Lottie from "lottie-react";
import ani2 from '../animations/ani2.json'
function Team(){
    return(
        <section className="team">
            <div className="heading">
                <h1>Our Team</h1>
            </div>
            <Lottie className="ani2" animationData={ani2}/>
            <div className="tem-cnt">
                <TemCrd
                    Img={""}
                    Name={"Anshuman"}
                    Position={"Position"}
                />
                                <TemCrd
                    Img={""}
                    Name={"Sudanshu"}
                    Position={"Position"}
                />
                                <TemCrd
                    Img={""}
                    Name={"Aniket"}
                    Position={"Position"}
                />
                                <TemCrd
                    Img={""}
                    Name={"Tejaswini"}
                    Position={"Position"}
                />
                                <TemCrd
                    Img={""}
                    Name={"Namrata"}
                    Position={"Position"}
                />
            </div>
        </section>
    )
}

export default Team;