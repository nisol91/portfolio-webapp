import React, { Component } from "react";
import "./project.scss";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { db } from "../portfolio_single_page/portfolio_sp";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      imageLoaded: false,
      projectId: this.props.match.params,
      project: []
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  async fetchProjects(projID) {
    await db
      .collection("projects")
      .where("id", "==", projID)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log("=====PROJECTS in project====");
        console.log(data[0].img);
        console.log("=====PROJECTS====");
        this.setState({ project: data[0] });
      });
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
    const { projID } = this.props.match.params;
    this.fetchProjects(projID);
    console.log("====================================");
    // console.log(this.props.location.state);
    console.log(projID);

    console.log("====================================");
  }

  render() {
    return (
      <div className="projCont">
        <div className="titleProj">
          <h1>{this.state.project.name}</h1>
          <h3>{this.state.project.description}</h3>
        </div>
        <div className="imgContainer">
          {!this.state.imageLoaded && (
            <Spinner color="primary" className="imgSpinner" />
          )}
          <img
            src={this.state.project.img}
            alt=""
            onLoad={this.handleImageLoaded}
          />
        </div>
      </div>
    );
  }
}
