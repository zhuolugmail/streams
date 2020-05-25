import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchAStream, editAStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  state = { stream: null, redirect: null };

  componentDidMount() {
    this.props.fetchAStream(this.props.match.params.id);
  }

  onSuccess = () => {
    this.setState({ redirect: "/" });
  };
  onSubmitFunc = () => {
    return (formValues) =>
      this.props.editAStream(this.props.stream.id, formValues, this.onSuccess);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}></Redirect>;
    }
    if (!this.props.stream) return <div className="stream-edit">Loading</div>;
    return (
      <div className="stream-edit">
        <h3>Edit A Stream</h3>
        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
          onSubmit={this.onSubmitFunc()}
        ></StreamForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.strms[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchAStream, editAStream })(
  StreamEdit
);
