// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'

import MeetingInfoCard from './components/MeetingInfo/meetingInfoCard';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
     <MeetingInfoCard></MeetingInfoCard>
    </div>
  );
}

export default App;
