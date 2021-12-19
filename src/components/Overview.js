import React from "react";

const Overview = ({ dashboard }) => {
  return (
    <div className="Overview">
      <div className="Header">
        <h2>Overview</h2>
        <div className="Button">Dashboard</div>
      </div>
      <div className="Main-body">
        <div className="Main-left">
          <div className="content">
            <div className="heading2">Profile Views</div>
            <div className="Value">{dashboard.profile_views}</div>
          </div>
          <div className="content">
            <div className="heading2">Jobs Applied</div>
            <div className="Value">{dashboard.jobs_applied}</div>
          </div>
        </div>
        <div className="Main-right">
          <div className="content">
            <div className="heading2">Mentorship Sessions</div>
            <div className="Value">{dashboard.mentorship_sessions}</div>
          </div>
          <div className="content">
            <div className="heading2">Skills Verified</div>
            <div className="Value">{dashboard.skills_verified}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
