import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="app">
          <div className="card-container">
            <div className="card-body">
              <CardBack />

              <CardFront />
            </div>
          </div>

          <div className="ui pointing red basic label">
            To connect or checkout some of my more recent projects: Hover over
            my card and follow my social media links on the back!{" "}
          </div>
        </div>
        <div id="footer">
          {" "}
          <p className="love">Made with ❤️ in Chicago</p>
        </div>
      </div>
    );
  }
}

export default App;
