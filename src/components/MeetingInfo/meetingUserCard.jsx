import React from "react";
import './meetingUserCard.scss'
import { GrCalendar } from "react-icons/gr";
import { WiTime4 } from "react-icons/wi";
import Button from 'react-bootstrap/Button'
// import { height } from "@fortawesome/free-solid-svg-icons/fa0";
// import User from '../../../public/user.jpg'

const MeetingUserCard =((p)=>{
    return(
        <>
        <div className="meetingUserHead" style={{width:'800px',marginBottom:'30px'}}>
            <div className="leftSideUser">
                <div style={{borderBottom:'1px solid  #D6D6D6',height:'200px'}}>
                    <div>
                    <img src="./user.jpg" style={{}} className='userImage'></img>
                    <p>
                        Name
                    </p>
                    <p>
                        Position
                    </p>
                    </div>
                </div>
                <div style={{color:'#0A66C2'}} className="bootomIcon">
                    <div style={{height:'90%',borderRight:'1px solid  #D6D6D6'}}>
                    
                        <GrCalendar className="icon" />
                        <p>Date</p>
                    </div>
                    <div style={{height:'90%'}}>
                    <WiTime4  className="icon"/>
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
                    <div style={{marginRight:'5px',textAlign:'end'}}>

                    <Button className="button-width">Reschedule Meeting</Button>
                    </div>
                    <div style={{marginLeft:'5px',textAlign:'justify'}}>
                    <Button className="button-width ml-2" >Join Meeting</Button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
 
    )
})


export default MeetingUserCard