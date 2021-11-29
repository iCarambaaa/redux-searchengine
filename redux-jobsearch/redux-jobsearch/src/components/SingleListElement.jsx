import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
  setSelectedJobAction,
} from "../redux/actions";

const SingleListElement = ({ job, index, key }) => {
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  const isFav = favourites.includes(job.company_name);

  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFromFavouritesAction(job.company_name))
      : dispatch(addToFavouritesAction(job.company_name));
  };

  return (
    <li key={key}>
      <Link
        onClick={() => dispatch(setSelectedJobAction(job))}
        to={`/${job.company_name}`}
      >
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

export default SingleListElement;
