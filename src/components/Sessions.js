import React from 'react'

const Sessions =({sessions})=> {
    console.log(sessions[0].mentor_name);
    return (
        <div className="Sessions">
            <div className="Header">
                <h2>Upcoming Sessions</h2>
                <div className="Button">View All</div>
            </div>
            <div >
               { sessions.map((session,index)=>{
               return <div className="lower-part">
                   <img className="users" src="https://img.icons8.com/ios-filled/56/000000/user.png" alt="userimage"/>
                 <div className="Name">{session.mentor_name} </div>
                   <div className="date">{session.timings}<br/><span className="date">{session.date}</span></div>
                   <div className="Button" id={session.session_type==='Mentorship'?'mentor':'review'} >{session.session_type}</div>
                   <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png" alt="right arrow"/>
                   </div>
               }
               )}
               </div>
               </div>
            
        
    )
}

export default Sessions
