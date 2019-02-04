import { RequestState } from "../components/request-state";

function mapStateToProps(state) {
  return {
    requestState: state.request.state,
    payload: state.payload
  };
}

export default connect(mapStateToProps)(RequestState);
