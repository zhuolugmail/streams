import React from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchAStream } from "../../actions/index";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchAStream(this.props.match.params.id);
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
  }

  componentDidUpdate() {
    if (this.props.stream) {
      this.player.attachMediaElement(this.videoRef.current);
      this.player.load();
    }
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    if (!this.props.stream) return <div className="stream-edit">Loading</div>;
    return (
      <div className="stream-show">
        <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
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
