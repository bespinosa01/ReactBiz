import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardBack />

          <CardFront />
        </div>
      </div>
    );
  }
}

export default App;
