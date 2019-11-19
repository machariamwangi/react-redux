import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>The new Administration</h1>
        <p>React, router , redux responsive admin app</p>
        <Link to="/about" className="btn btn-primary btn-lg">
          Learn More
        </Link>
      </div>
    );
  }
}

export default HomePage;
