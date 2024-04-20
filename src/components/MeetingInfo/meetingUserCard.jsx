import React from "react";
import './meetingUserCard.scss'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
// import User from '../../../public/user.jpg'
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const MeetingUserCard =((p)=>{
    return(
        <>
        <div className="meetingUserHead" style={{width:'800px'}}>
            <div className="leftSideUser">
                <div>
                    <div>
                    <img src="./user.jpg" style={{width:'100px',height:'100px',borderRadius:'50%',border:'2px solid #0A66C2'}}></img>
                    <p>
                        Name
                    </p>
                    <p>
                        Position
                    </p>
                    </div>
                </div>
                <div style={{color:'#0A66C2'}} className="bootomIcon">
                    <div>
                        <img></img>
                        <p>Date</p>
                    </div>
                    <div>
                        <img></img>
                        <p>Date</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="rightSideInterview">
                <div className="tableCard ">
                    <div className="table_data rightBorder">
                        <p>1St level: </p>
                    </div>
                    <div className="table_data">
                        <p>Interviewer: </p>
                    </div>
                </div>
                <div  className="tableCard">
                    <div className="table_data rightBorder">
                        <p>2nd level: </p>
                    </div>
                    <div className="table_data ">
                        <p>Interviewer: </p>
                    </div>
                </div>
                <div  className="tableCard">
                    <div className="table_data rightBorder">
                        <p>3rd level: </p>
                    </div>
                    <div className="table_data">
                        <p>Interviewer: </p>
                    </div>
                </div>
                <div  className="tableCard">
                    <div className="table_data rightBorder">
                        <p>Meet via: </p>
                    </div>
                    <div className="table_data">
                        <p>Interviewer: </p>
                    </div>
                </div>
                <div className="bottomButton">
                    <div>

                    <Button className="button-width">Reschedule Meeting</Button>
                    </div>
                    <div>
                    <Button className="button-width ml-2" style={{marginLeft:'10px'}}>Join Meeting</Button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
 
    )
})


export default MeetingUserCard