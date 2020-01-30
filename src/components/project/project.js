import React, { Component } from "react";
import "./project.scss";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      imageLoaded: false
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }
  handleImageLoaded() {
    setTimeout(() => {
      this.setState({
        imageLoaded: true
      });
      console.log(this.state.imageLoaded);
    }, 0);
  }
  componentDidMount() {
    console.log("====================================");
    console.log(this.props.location.state);
    console.log("====================================");
  }

  render() {
    return (
      <div className="projCont">
        <div className="imgContainer">
          {!this.state.imageLoaded && (
            <Spinner color="primary" className="imgSpinner" />
          )}
          <img
            src={this.props.location.state.img}
            alt=""
            onLoad={this.handleImageLoaded}
          />
        </div>
        <h1>{this.props.location.state.name}</h1>
      </div>
    );
  }
}
