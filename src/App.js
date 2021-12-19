import React ,{useState, useEffect} from 'react'
import Header from './components/Header'
import Overview from './components/Overview'
import Sessions from './components/Sessions';
import Navigation from './components/Navigation'
import Jobs from './components/Jobs'
import axios from 'axios'
function App() {
const url ='https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818'
const [data,setdata]=useState(null);

useEffect(() => {
  axios.get(url)
  .then((response) => {
  setdata(response.data);
})
 },[])
 if(data) {
  return (
    <div className="App">
      <Header name={data.full_name}/>
      <div className="Main">
      <Navigation />
      <div className="left-pane">
        <Overview dashboard={data.dashboard_stats}/>
        <Sessions sessions={data.upcoming_sessions}/>
      </div>
      <div className="right-pane">
        <Jobs jobs ={data.job_postings}/>
        </div></div>
    </div> 
  );
 }
 
 
   return (
     <div></div>
   );
}

export default App;
