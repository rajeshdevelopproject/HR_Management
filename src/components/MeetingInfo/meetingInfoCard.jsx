import React from "react";
import Card from 'react-bootstrap/Card';
import './meetingInfoCard.scss'
import MeetingUserCard from "./meetingUserCard";
import { BsThreeDotsVertical } from "react-icons/bs";

const MeetingInfoCard = (() => {
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
                        <MeetingUserCard></MeetingUserCard>
                        <MeetingUserCard></MeetingUserCard>
                        <MeetingUserCard></MeetingUserCard>
                        <MeetingUserCard></MeetingUserCard>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
})


export default MeetingInfoCard