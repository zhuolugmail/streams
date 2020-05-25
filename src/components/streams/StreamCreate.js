import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  state = { redirect: null };

  onSuccess = () => {
    this.setState({ redirect: "/" });
  };

  onSubmitFunc = () => {
    return (formValues) => this.props.createStream(formValues, this.onSuccess);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}></Redirect>;
    }
    return (
      <div className="stream-create">
        <h3>Create A Stream</h3>
        <StreamForm onSubmit={this.onSubmitFunc()}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
