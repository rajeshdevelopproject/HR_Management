// import logo from './logo.svg';

import './App.css';
import Sidebar from './components/common/Sidebar/sidebar'

import MeetingInfoCard from './components/MeetingInfo/meetingInfoCard';
import Header from './components/common/Header/header';
import ApplicationInfo from './components/ApplicationInfo/applicationInfo';
import PostJob from './components/Postjob/postjob';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar>
        
      </Sidebar>
     <MeetingInfoCard></MeetingInfoCard>
     <PostJob></PostJob>
     <ApplicationInfo></ApplicationInfo>
    </div>
  );
}

export default App;
