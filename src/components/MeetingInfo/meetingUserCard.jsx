import React from "react";
import './meetingUserCard.scss'
import { GrCalendar } from "react-icons/gr";
import { WiTime4 } from "react-icons/wi";
import Button from 'react-bootstrap/Button'
// import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import User from '../../assets/Profile.png'
import Calendar from '../../assets/sidebar-icons/Calendar.png'

const MeetingUserCard =((prop)=>{
    return(
        <>
        <div id='meetinguser' className="meetingUserHead" style={{width:'800px',marginBottom:'30px'}}>
            <div className="leftSideUser">
                <div style={{borderBottom:'1px solid  #D6D6D6',height:'200px'}}>
                    <div>
                    <img src={prop.user.profile} style={{}} className='userImage'></img>
                    <p className="mb-1">
                       {prop.user.name}
                    </p>
                    <p>
                        Senior Python Developer
                    </p>
                    </div>
                </div>
                <div style={{color:'#0A66C2'}} className="bootomIcon">
                    <div style={{height:'90%',borderRight:'1px solid  #0A66C2'}}>
                    
                        <img src={Calendar} className="icon" />
                        <p>19th Feb 2024</p>
                    </div>
                    <div style={{height:'90%'}}>
                    <WiTime4  className="icon"/>
                        <p>10.30 A.M</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="rightSideInterview">
                <div className="tableCard ">
                    <div className="table_data rightBorder">
                        <p>1st level: 7/10</p>
                    </div>
                    <div className="table_data">
                        <p>Interviewer: Stella</p>
                    </div>
                </div>
                <div  className="tableCard">
                    <div className="table_data rightBorder">
                        <p>2nd level: 6/10</p>
                    </div>
                    <div className="table_data ">
                        <p>Interviewer: Smith</p>
                    </div>
                </div>
                <div  className="tableCard">
                    <div className="table_data rightBorder">
                        <p>3rd level: Waiting</p>
                    </div>
                    <div className="table_data">
                        <p>Interviewer: <span style={{color:'#0A66C2'}}>Stephan</span></p>
                    </div>
                </div>
                <div  className="tableCard">
                    <div className="table_data rightBorder">
                        <p>Meet via: G-Meet</p>
                    </div>
                    <div className="table_data">
                        <p>Interviewer: Johnson</p>
                    </div>
                </div>
                <div className="bottomButton">
                    <div style={{marginRight:'5px',textAlign:'end'}}>

                    <Button className="button-width unfill">Reschedule Meeting</Button>
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