import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSelectedJobAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  jobList: state.jobList,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedJob: (data) => {
    dispatch(setSelectedJobAction(data));
  },
});

// console.log("here console: ", jobList);

const JobList = ({ jobList, setSelectedJob }) => {
  return (
    <div>
      <ul>
        {jobList.map((job, i) => (
          <li key={i}>
            <Link
              onClick={() => setSelectedJob(job)}
              to={`/${job.company_name}`}
            >
              {job.company_name}
            </Link>
            , {job.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
