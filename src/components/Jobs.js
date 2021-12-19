import React from "react";
const moment = require("moment");
const Jobs = ({ jobs }) => {
  console.log(jobs);

  return (
    <div className="Jobs">
      <div className="Header">
        <h2>New Jobs Postings</h2>
        <div className="Button">View All</div>
      </div>
      <div className="bottom">
        {jobs.map((job, index) => {
          return (
            <div className="job">
              <img
                className="company-logo"
                src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/56/000000/external-finding-new-jobs-with-higher-salary-packages-jobs-fresh-tal-revivo.png"
              />
              <div className="information">
                <ul>
                  <li className="Name">{job.role}</li>
                  <li className="Company">{job.organization_name}</li>
                  <li className="type">{job.location}</li>
                </ul>
              </div>
              <div className=" Time">{moment(job.date_posted).fromNow()}</div>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
