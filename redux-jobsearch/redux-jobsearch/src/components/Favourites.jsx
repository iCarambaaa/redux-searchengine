import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { removeFromFavouritesAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.favourites); // hook for get state
  const dispatch = useDispatch(); // hook for dispatch state

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup className="mt-5">
            {favourites.map((f) => (
              <ListGroupItem>
                <StarFill
                  onClick={() => dispatch(removeFromFavouritesAction(f))}
                />
                <span> {f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
