import React from "react";
import { connect } from "react-redux";
import { fetchAStream, deleteAStream } from "../../actions/index";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  onDismiss() {
    history.push("/");
  }

  deleteStream = () => {
    this.props.deleteAStream(this.props.match.params.id);
    history.push("/");
  };

  renderActions = () => {
    /*
    return (
      <div>
        <button className="ui negative button">Delete</button>
        <button className="ui button">Cancel</button>
      </div>
    );
    */
    return (
      /* You can use <></> too */
      <React.Fragment>
        <button className="ui negative button" onClick={this.deleteStream}>
          Delete
        </button>
        <button className="ui button" onClick={this.onDismiss}>
          Cancel
        </button>
      </React.Fragment>
    );
  };

  componentDidMount() {
    this.props.fetchAStream(this.props.match.params.id);
  }

  renderContent() {
    return `Are you sure you want to delete ${
      this.props.stream ? `stream: ${this.props.stream.title}` : "this stream"
    }?`;
  }

  render() {
    if (!this.props.stream) return <div></div>;
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        onDismiss={this.onDismiss}
        actions={this.renderActions()}
      ></Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.strms[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteAStream, fetchAStream })(
  StreamDelete
);
