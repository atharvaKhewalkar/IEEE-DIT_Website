import React from 'react';
import './join.css'
import ani5 from '../animations/ani5.json'
import Lottie from 'lottie-react';
import ani6 from '../animations/ani6.json'
import ieee_doc from '../../DOCS/IEEE.pdf'

function Join(){
    return(
        <section className="join">
            <div className='container'>
            <div className='heading'>
                    <h1>Contact Us</h1>
                </div>
            <div className='center'>

            
                
                <div className='jon-cnt'>
                <Lottie className='ani5' animationData={ani5}/>
                
                    <form>
                        <input type='text' placeholder='Name'></input>
                        <input type='email' placeholder='Email'></input>
                        <input type='number' placeholder='Number'></input>
                        <input type='textarea' placeholder='Feedback' style={{height:"20vh"}}></input>
                        <a className='butn btn btn-primary' href={ieee_doc}>Join Us </a>
                        <button className='butn btn btn-primary'>Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Join;