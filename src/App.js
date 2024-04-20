// import logo from './logo.svg';

import './App.css';
import Sidebar from './components/common/Sidebar/sidebar'

import MeetingInfoCard from './components/MeetingInfo/meetingInfoCard';
import Header from './components/common/Header/header';
import ApplicationInfo from './components/ApplicationInfo/applicationInfo';
import PostJob from './components/Postjob/postjob';
import MainTable from './components/DataTable/maintable';

import {UpComingData,Activity,HiringCandidates} from './data/data'
import React, { useEffect, useState } from 'react';
import StatusDetails from './components/StatusDetails/statusdetails';
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
      <Sidebar>
        
      </Sidebar>
     <MeetingInfoCard></MeetingInfoCard>
     <PostJob></PostJob>
    <MainTable />
    {
      loading?<p>Daata is loading</p>:<><StatusDetails data={data}></StatusDetails>
      <StatusDetails data={active}></StatusDetails>
      <StatusDetails data={hiringdata}></StatusDetails>
      </>
    }
     <ApplicationInfo></ApplicationInfo>
     
    </div>
  );
}

export default App;
