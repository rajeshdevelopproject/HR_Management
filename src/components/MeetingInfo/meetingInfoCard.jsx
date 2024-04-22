import React from "react";
import Card from 'react-bootstrap/Card';
import './meetingInfoCard.scss'
import MeetingUserCard from "./meetingUserCard";
import { BsThreeDotsVertical } from "react-icons/bs";

const MeetingInfoCard = (() => {
    let meeting_obj = [{
        "profile":'./user.jpg',
        "name":'John Smith',
        "position":'Senior Python Developer'
    },
    {
        "profile":'./user_wo.jpg',
        "name":'Maria',
        "position":'Senior Python Developer'
    },
    {
        "profile":'./user.jpg',
        "name":'Rajesh',
        "position":'Senior Python Developer'
    },
    {
        "profile":'./user_wo.jpg',
        "name":'Jenita',
        "position":'Senior Python Developer'
    },
    {
        "profile":'./user.jpg',
        "name":'Sanjith',
        "position":'Senior Python Developer'
    }

]
    return (
        <>
            <Card
            >
                <Card.Header>
                    <div className="meetingInfoHeader">
                        <p className="m-0">Today Interviews Meetings Info</p>
                        <div>
                        </div>
                    </div>
                </Card.Header>
                <div style={{textAlign:'right',marginRight:'20px',marginTop:'5px'}}>
                    <BsThreeDotsVertical className="vertical-dots" />

                </div>
                <Card.Body>
                    <div className="userDetailsShow">

                        {
                            meeting_obj.map((obj)=>{
                               return <MeetingUserCard user={obj}></MeetingUserCard>
                            })
                        }
                        
                    </div>

                </Card.Body>
            </Card>
        </>
    )
})


export default MeetingInfoCard