import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";

class StreamList extends React.Component {
  componentDidMount = () => {
    this.props.fetchStreams();
  };
  renderAdmin(stream) {
    if (this.props.isSignedIn && stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }
  renderStreamList() {
    const strms = this.props.strms;
    /*
    const strmsList = Object.keys(strms).map((key) => {
      return strms[key];
    });
    */
    const strmsList = Object.values(strms);
    return strmsList.map((strm) => {
      return (
        <div className="item" key={strm.id}>
          {this.renderAdmin(strm)}
          <i className="large middle aligned icon camera"></i>
          <Link to={`/streams/${strm.id}`} className="content">
            {strm.title}
            <div className="description">{strm.description}</div>
          </Link>
        </div>
      );
    });
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div className="stream-list ui celled list">
          {this.renderStreamList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    strms: state.strms,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
