// import logo from './logo.svg';

import './App.css';
import Sidebar from './components/common/Sidebar/sidebar'

import MeetingInfoCard from './components/MeetingInfo/meetingInfoCard';
import Header from './components/common/Header/header';
import ApplicationInfo from './components/ApplicationInfo/applicationInfo';
import PostJob from './components/Postjob/postjob';
import MainTable from './components/DataTable/maintable';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {UpComingData,Activity,HiringCandidates} from './data/data'
import React, { useEffect, useState } from 'react';
import StatusDetails from './components/StatusDetails/statusdetails';

import Assessment from './components/Assessmentcard/assessmentcard';
function App() {

  let [data,setData] = useState({})
  let [active,setActive] = useState({})
  let [hiringdata,setHiring] = useState({})
  let [loading,setLoading] = useState(true)
  useEffect(()=>{
    let temp= UpComingData()
    let act = Activity
    let hiring = HiringCandidates()
    setData(temp)
    setActive(act)
    setHiring(hiring)
    setLoading(false)
  },[])

  return (
    <div className="App">
      <Header></Header>
      <div className='empty_div'></div>
      <div className='main-devicion'>
        <div className='sidebar'>
              <Sidebar>
            </Sidebar>
        </div>
        <div style={{paddingRight:'15px',marginBottom:'20px'}}>
          <div className='top-main-header'>
            <div className='header-details'>
              <h3>HR Employee</h3>
              <p className='header-margin'>Enjoy your selecting potential candidates Tracking and Management System.</p>
            </div>
            <div>
              <button className='Taskbutton'>Task Details</button>
            </div>
          </div>
          <div className='top_section'>
              <ApplicationInfo></ApplicationInfo>
              <Assessment></Assessment>
          </div>
          <div className='second_section'>
            <div>
                <MeetingInfoCard></MeetingInfoCard>
                <PostJob></PostJob>
                <MainTable />
                   
            </div>
            <div>
            <div>
                <Calendar  />
            </div>
            {
                      loading?<p>Daata is loading</p>:<><StatusDetails data={data}></StatusDetails>
                      <StatusDetails data={active}></StatusDetails>
                      <StatusDetails data={hiringdata}></StatusDetails>
                      </>
                    }
            </div>
          </div>
        </div>
      </div>
 
   
     
     
    
   
     
    </div>
  );
}

export default App;
