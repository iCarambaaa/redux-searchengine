import { connect } from "react-redux";
import { Markup } from "interweave";

const mapStateToProps = (state) => ({
  selectedJob: state.selectedJob,
});

// let HTMLBody = document.createElement("div");
// HTMLBody.innerHTML = { selectedJob };
// console.log(HTMLBody);
// console.log({ selectedJob });
const SingleJobOffer = ({ selectedJob }) => {
  return <Markup content={selectedJob.description} />;
};

export default connect(mapStateToProps)(SingleJobOffer);
