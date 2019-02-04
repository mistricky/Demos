import { connect } from "react-redux";
import {
  fetchPostSuccess,
  fetchPostFailure,
  fetchPostRequest
} from "../actions/todos";
import { RequestState } from "../components/request-state";

function mapStateToProps(state) {
  return {
    requestState: state.request.state,
    payload: state.request.payload,
    msg: state.send
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestClick: url => {
      dispatch(fetchPostRequest());
      fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(fetchPostSuccess(res.data));
        })
        .catch(err => dispatch(fetchPostFailure(err)));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestState);
