import Searchbar from "./Searchbar";
import JobList from "./JobList";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Searchbar />
      <JobList />
    </Container>
  );
};

export default Home;
