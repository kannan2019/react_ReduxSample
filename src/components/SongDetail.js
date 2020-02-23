import React, { Component } from "react";
import { connect } from "react-redux";
class SongDetail extends Component {
  render() {
    if (this.props.song) {
      return (
        <div>
          <h3>Details for:</h3>
          <p>Title: {this.props.song.title}</p>
          <p>Duration: {this.props.song.duration}</p>
        </div>
      );
    }
    return <div>No Song selected</div>;
  }
}
const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
