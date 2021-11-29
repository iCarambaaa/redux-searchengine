import React from "react";
import SingleListElement from "./SingleListElement";
import { useSelector } from "react-redux";

const JobList = () => {
  const jobList = useSelector((state) => state.jobList.jobList);

  return (
    <div>
      <ul>
        {jobList.map((job, i) => (
          <SingleListElement job={job} index={i} key={job._id} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
