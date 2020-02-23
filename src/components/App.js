import React, { Component } from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
class App extends Component {
  render() {
    return (
      <div className="ui container grid" style={{ marginTop: "20px" }}>
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column three wide">
          <SongDetail />
        </div>
      </div>
    );
  }
}
export default App;
