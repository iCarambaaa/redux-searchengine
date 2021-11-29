import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
  setSelectedJobAction,
} from "../redux/actions";

const mapStateToProps = (state) => ({
  jobList: state.jobList.jobList,
  favourites: state.favourites.favourites,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedJob: (data) => {
    dispatch(setSelectedJobAction(data));
  },
  addToFavourites: (data) => dispatch(addToFavouritesAction(data)),
  removeFromFavourites: (data) => dispatch(removeFromFavouritesAction(data)),
});
console.log(mapStateToProps);
console.log(mapStateToProps);
const singleListElement = ({
  job,
  index,
  favourites,
  addToFavourites,
  removeFromFavourites,
  setSelectedJob,
  jobList,
}) => {
  const isFav = favourites.includes(job.company_name);
  //   const isFav = true;
  console.log(isFav, favourites);

  const toggleFavourite = () => {
    isFav
      ? removeFromFavourites(job.company_name)
      : addToFavourites(job.company_name);
  };

  console.log("HERERERERERE:", jobList);

  return (
    // <p>hello </p>
    <li key={job._id}>
      <Link onClick={() => setSelectedJob(job)} to={`/${job.company_name}`}>
        {job.company_name}
      </Link>
      , {job.title}{" "}
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
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(singleListElement);
