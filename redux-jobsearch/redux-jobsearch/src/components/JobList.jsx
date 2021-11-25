import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Star, StarFill } from "react-bootstrap-icons";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
  setSelectedJobAction,
} from "../redux/actions";

const mapStateToProps = (state) => ({
  jobList: state.jobList.jobList,
  favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedJob: (data) => {
    dispatch(setSelectedJobAction(data));
  },
  addToFavourites: (data) => dispatch(addToFavouritesAction(data)),
  removeFromFavourites: (data) => dispatch(removeFromFavouritesAction(data)),
});

// console.log("here console: ", jobList); ???

const JobList = ({
  jobList,
  favourites,
  setSelectedJob,
  removeFromFavourites,
  addToFavourites,
}) => {
  const isFav = favourites.includes(
    jobList.filter((job) => job.company_name === favourites)
  );
  console.log(isFav, favourites);
  const toggleFavourite = () => {
    isFav
      ? removeFromFavourites(jobList.company_name)
      : addToFavourites(jobList.company_name);
  };

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
            {job.title}{" "}
            {isFav ? (
              <StarFill
                color="gold"
                size={16}
                className="me-4 my-auto"
                onClick={toggleFavourite}
              />
            ) : (
              <Star
                color="gold"
                size={16}
                className="me-4 my-auto"
                onClick={toggleFavourite}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
