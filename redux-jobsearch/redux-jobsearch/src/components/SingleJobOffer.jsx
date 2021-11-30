import { useSelector, useDispatch } from "react-redux";
import { Star, StarFill } from "react-bootstrap-icons";
import { Markup } from "interweave";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
  setSelectedJobAction,
} from "../redux/actions";

const SingleJobOffer = () => {
  const selectedJob = useSelector((state) => state.selectedJob.selectedJob);
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const isFav = favourites.includes(selectedJob.company_name);

  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFromFavouritesAction(selectedJob.company_name))
      : dispatch(addToFavouritesAction(selectedJob.company_name));
  };

  return (
    <div className="d-flex flex-column ">
      <p className="text-center">
        {isFav ? (
          <>
            <StarFill
              color="gold"
              size={24}
              className="me-4 my-auto"
              onClick={toggleFavourite}
            />
            <p>Remove from favorites</p>
          </>
        ) : (
          <>
            <Star
              color="gold"
              size={24}
              className="me-4 my-auto"
              onClick={toggleFavourite}
            />
            <p> Add to favorites</p>
          </>
        )}
      </p>
      <h2>{selectedJob.title}</h2>
      <Markup content={selectedJob.description} />
    </div>
  );
};

export default SingleJobOffer;
