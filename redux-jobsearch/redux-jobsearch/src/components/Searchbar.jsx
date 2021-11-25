import { Form, Container } from "react-bootstrap";
import { useState } from "react";
import { connect } from "react-redux";
import { saveFetchedJobsAction } from "../redux/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  saveFetchedJobs: (data) => {
    dispatch(saveFetchedJobsAction(data));
  },
});

const Searchbar = ({ saveFetchedJobs }) => {
  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(baseEndpoint + query + "&limit=15");

    if (!response.ok) {
      alert("Error fetching results");
      return;
    }

    const { data } = await response.json();

    saveFetchedJobs(data);
    // console.log(data);
  };

  return (
    <Container className="d-flex justify-content-center my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          {/* <Form.Label>Search & Find</Form.Label> */}
          <Form.Text className="text-muted">
            Want to be a productive human beeing? Get a job and pay some taxes.
          </Form.Text>
          <Form.Control
            type="search"
            placeholder="type here => press enter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
