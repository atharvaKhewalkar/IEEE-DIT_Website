import React from "react";
import './home.css'
import ani1 from '../animations/ani1.json'
import Lottie from 'lottie-react';

function Home(){
    return(
        <section className="home">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                        <div className="nav-pstn">
                                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="#">IEEE</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse nav-ele" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">About Us</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">Team</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">Events</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">Our Work</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">Become a Member</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                        
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        
                    </div>
                    <div className="homePage col-md-12">
                        <div className="homeLeft col-md-6">
                            <h1>Welcome</h1>
                            <span>To</span>
                            <h1>IEEE !!</h1>
                        </div>
                        <div className="homeRight col-md-6">
                            <Lottie className="animatio" animationData={ani1} style={{width:"44%"}}/>
                        </div>
                            
                    </div>
                </div>
                
            </div>
        </section>
    )
}
 
export default Home;