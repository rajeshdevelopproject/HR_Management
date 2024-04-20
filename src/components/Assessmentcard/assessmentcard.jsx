import React from "react";

import './assessment.scss';
import { BsFileEarmarkCheck } from "react-icons/bs";


const Assessment =(()=>{
    return (
        <>
        <div className="assessmentcard">
            <div className="topassess">
                <div className="iconbox">
                    <BsFileEarmarkCheck  className="noteicon"/>
                </div>
                <img src="./big-girl.png" className="smallimg"></img>
            </div>
            <div className="bottomassess">
                <div className="countobj">
                    <p className="countnum">0033</p>
                    <p className="counttext">New Assessment's</p>
                </div>
                <div className="bigimg-div">
                    <div><img src="./big-girl.png" className="bigimg"></img></div>
                    
                    <div><button className="viewdetails">VIEW DETAILS</button></div>
                </div>
            </div>
        </div>
        </>
    )
})

export default Assessment