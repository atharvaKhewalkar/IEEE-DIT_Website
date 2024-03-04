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
                    Position={"Chair"}
                />
                                <TemCrd
                    Img={""}
                    Name={"Tejaswini"}
                    Position={"Vice Chair "}
                />
                <TemCrd
                    Img={""}
                    Name={"Aarti  Mandavgane"}
                    Position={"Secretary"}
                />
                                <TemCrd
                    Img={""}
                    Name={"Aniket Chaudhari"}
                    Position={"Tresurer"}
                />
                                <TemCrd
                    Img={""}
                    Name={"Sudanshu"}
                    Position={"Departmental Head"}
                />
                <TemCrd
                    Img={""}
                    Name={"Atharva Khewalkar"}
                    Position={"Web Master"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Om Satwadhar"}
                    Position={"Joint Secretary"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Suyash Jadhav"}
                    Position={"Joint Secretary"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Dnyaneshwar Ambekar"}
                    Position={"E&TC Departmental Coordinator"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Manik Sharma"}
                    Position={"CS Departmental Coordinator "}
                />
                               <TemCrd
                    Img={""}
                    Name={"Pushkar Brahmankar"}
                    Position={"A&R Departmental Coordinator"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Sakshi Sudrik"}
                    Position={"IT Departmental Coordinator"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Sarthak Pasilkar"}
                    Position={"Media Content Head "}
                />
                               <TemCrd
                    Img={""}
                    Name={"Shaikh Muzaffar"}
                    Position={"Technical Head (IT) "}
                />
                               <TemCrd
                    Img={""}
                    Name={"Jayesh Jagtap"}
                    Position={"Technical Head (Core) "}
                />
                               <TemCrd
                    Img={""}
                    Name={"Atharva Deoghare"}
                    Position={"Public Relations Head"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Bhavesh Choudhary"}
                    Position={"Assistant treasurer"}
                />
                               <TemCrd
                    Img={""}
                    Name={"Aradhana Kumari"}
                    Position={"Membership Coordinatorr"}
                />
                               <TemCrd
                    Img={""}
                    Name={" Disha Jadhav"}
                    Position={"Assistant Media Content Head "}
                />
                               <TemCrd
                    Img={""}
                    Name={"Vaishnavi Desai"}
                    Position={"Assistant Media Content Head "}
                />
                <TemCrd
                    Img={""}
                    Name={"Anjali Jha"}
                    Position={"Assistant Technical Head "}
                />
                <TemCrd
                    Img={""}
                    Name={" Irfa Arshad"}
                    Position={"Assistant Technical Head  "}
                />
                <TemCrd
                    Img={""}
                    Name={"Sakshi Babanagare"}
                    Position={"Assistant Technical Head  "}
                />
                <TemCrd
                    Img={""}
                    Name={"Shravani Giri"}
                    Position={"Assistant Technical Head "}
                />
                <TemCrd
                    Img={""}
                    Name={"Aradhana Shukla"}
                    Position={"Assistant PR Head"}
                />
                 <TemCrd
                    Img={""}
                    Name={" Pranav Amale"}
                    Position={" Assistant PR Head "}
                />
                 <TemCrd
                    Img={""}
                    Name={" Akhilesh takale"}
                    Position={" Assistant PR Head "}
                />

            </div>
        </section>
    )
}

export default Team;