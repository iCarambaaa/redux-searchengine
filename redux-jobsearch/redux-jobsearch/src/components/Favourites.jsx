import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { removeFromFavouritesAction } from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (f) => {
    dispatch(removeFromFavouritesAction(f));
  },
});

class Favourites extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.props.favourites.map((f) => (
                <ListGroupItem>
                  <StarFill
                    onClick={() => this.props.removeFromFavourites(f)}
                  />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect((s) => s, mapDispatchToProps)(Favourites);
