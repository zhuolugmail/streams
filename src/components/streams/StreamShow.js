import React from "react";
import { connect } from "react-redux";
import { fetchAStream } from "../../actions/index";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchAStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) return <div className="stream-edit">Loading</div>;
    return (
      <div className="stream-show">
        <h1>{this.props.stream.title}</h1>
        <h2>{this.props.stream.description}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.strms[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchAStream })(StreamShow);
